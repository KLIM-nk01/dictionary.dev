import { AppDispatch } from '../store';
import axios from 'axios';
import { IWord } from '../models/IWord';
import { wordSlice } from './WordSlice';

export const fetchWord =
  (word: undefined | string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(wordSlice.actions.wordFetching());

      const response = await axios.get<IWord[]>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );

      dispatch(wordSlice.actions.wordFetchingSuccess(response.data));
    } catch (e) {
      dispatch(wordSlice.actions.wordFetchingError('Fetch error'));
    }
  };
