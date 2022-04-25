import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchWord } from '../../../store/reducers/ActionCreators';
import CircularProgress from '@mui/material/CircularProgress';

import { useAppSelector } from '../../../hooks/useAppSelector';

import ROUTES from '../../../constants/routes';

import './ResultPage.css';

const ResultPage: FC = () => {
  const dispatch = useAppDispatch();
  const { searchWord } = useParams();
  const history = useNavigate();

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
      {isLoading && <CircularProgress />}
      <div>
        {/* {word.map(({ word, origin, phonetics, meanings }, i) => ())} */}
      </div>
    </div>
  );
};

export default ResultPage;
