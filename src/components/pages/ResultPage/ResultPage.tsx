import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypedSelector';

const ResultPage: FC = () => {
  const { wordFromParams } = useParams();
  const { word, loading, error } = useTypedSelector((state) => state.wordState);
  console.log(word, loading, error);
  return <>{console.log(wordFromParams)}</>;
};

export default ResultPage;
