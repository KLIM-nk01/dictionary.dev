import React, { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { fetchWord } from '../../../store/reducers/ActionCreators';

import { Box, Card, CardContent, Typography, Button } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ROUTES from '../../../constants/routes';

import './ResultPage.css';

const ResultPage: FC = () => {
  const dispatch = useAppDispatch();
  const history = useNavigate();

  const { searchWord } = useParams();

  const { words, isLoading, error } = useAppSelector(
    (state) => state.wordReducer,
  );

  useEffect(() => {
    dispatch(fetchWord(searchWord));
  }, []);

  useEffect(() => {
    if (error) history(ROUTES.NOT_FOUND);
  }, [error]);

  return (
    <div className="resultRageWrapper">
      {isLoading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Button
            variant="contained"
            color="success"
            onClick={() => history(ROUTES.HOME)}
            sx={{ marginBottom: '50px', marginTop: '50px' }}
          >
            <ArrowBackIcon /> Back
          </Button>
          {words.map(({ word, phonetics, meanings }, i) => (
            <Card sx={{ minWidth: 500, marginBottom: '30px' }} key={i}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  {word}
                  {phonetics.map(({ text, audio }, i) => (
                    <Box component="div" key={i}>
                      <Typography component="span">[ {text} ] </Typography>

                      {audio && (
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => new Audio(audio).play()}
                        >
                          <PlayArrowIcon />
                        </Button>
                      )}
                    </Box>
                  ))}
                </Typography>

                <Box component="div">
                  {meanings.map(({ partOfSpeech, definitions }, i) => (
                    <Box component="div" key={i}>
                      <Typography
                        key={i}
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {partOfSpeech}
                      </Typography>

                      {definitions.map(
                        ({ definition, example, synonyms, antonyms }, i) => {
                          return (
                            <Box component="div" key={i}>
                              <Typography
                                variant="body2"
                                color="text.secondary"
                              >
                                Definition: {definition}
                              </Typography>
                              {example && (
                                <Typography component={'p'} variant={'body2'}>
                                  Example: {example}
                                </Typography>
                              )}
                              {synonyms.length ? (
                                <Typography component={'p'} variant={'body2'}>
                                  Synonyms:
                                  {synonyms.map((el, i) => (
                                    <Typography
                                      key={i}
                                      sx={{ wordBreak: 'break-all' }}
                                      component={'span'}
                                      variant={'body2'}
                                    >
                                      {el},
                                    </Typography>
                                  ))}
                                </Typography>
                              ) : (
                                ''
                              )}

                              {antonyms.length ? (
                                <Typography component={'p'} variant={'body2'}>
                                  Antonyms:
                                  {antonyms.map((el, i) => (
                                    <Typography
                                      key={i}
                                      component={'span'}
                                      variant={'body2'}
                                    >
                                      {el}
                                    </Typography>
                                  ))}
                                </Typography>
                              ) : (
                                ''
                              )}
                            </Box>
                          );
                        },
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ResultPage;
