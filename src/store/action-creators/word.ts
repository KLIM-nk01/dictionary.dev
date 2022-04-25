import axios from 'axios';
import { WordState, WordAction, ActionTypes } from '../../types/word';
import { Dispatch } from 'redux';

export const ferchWord = () => {
  return async (dispatch: Dispatch<WordAction>) => {
    try {
      dispatch({ type: ActionTypes.FETCH_WORD });
      const response = await axios;
    } catch {
      dispatch({
        type: ActionTypes.FETCH_WORD_ERROR,
        payload: 'Fetching error',
      });
    }
  };
};
