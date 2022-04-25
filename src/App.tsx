import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './constants/routes';

import HomePage from './components/pages/HomePage/HomePage';
import ResultPage from './components/pages/ResultPage/ResultPage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.RESULT + ':searchWord'} element={<ResultPage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
