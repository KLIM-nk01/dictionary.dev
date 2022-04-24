import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTES from './constants/routes';

import HomePage from './components/pages/HomePage/HomePage';
import ResultPage from './components/pages/ResultPage/ResultPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.RESULT + ':word'} element={<ResultPage />} />
      {/* <Route path={ROUTES.NOT_FOUND} element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
