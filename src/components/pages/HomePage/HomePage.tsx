import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import ROUTES from '../../../constants/routes';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import './HomePage.css';

const HomePage: FC = () => {
  const history = useNavigate();
  const [word, setWord] = useState('');

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
  };

  const onSearchClick = () => history(ROUTES.RESULT + word);

  return (
    <div className="HomePageWrapper">
      <Box sx={{ marginTop: '20px' }}>
        <Box>
          <TextField
            id="outlined-basic"
            label="Enter the word"
            variant="outlined"
            sx={{ minWidth: 400 }}
            value={word}
            onChange={onSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={onSearchClick} disabled={!word}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
