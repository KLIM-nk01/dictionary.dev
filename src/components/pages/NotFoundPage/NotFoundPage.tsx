import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import ROUTES from '../../../constants/routes';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './NotFoundPage.css';

const NotFoundPage: FC = () => {
  const history = useNavigate();

  return (
    <div className="NotFoundPageWrapper">
      <Box
        component="div"
        sx={{
          display: 'grid',
          placeItems: 'center center',
        }}
      >
        <Typography variant="h4" gutterBottom component="div">
          Word not found
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => history(ROUTES.HOME)}
          sx={{ margin: '0 25px' }}
        >
          <ArrowBackIcon /> Back
        </Button>
      </Box>
    </div>
  );
};

export default NotFoundPage;
