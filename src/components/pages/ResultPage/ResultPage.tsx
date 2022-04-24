import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ResultPage: FC = () => {
  const { word } = useParams();
  return <>{console.log(word)}</>;
};

export default ResultPage;
