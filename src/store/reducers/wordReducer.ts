import { WordState, WordAction, ActionTypes } from '../../types/word';

const initialState: WordState = {
  word: [],
  loading: false,
  error: null,
};

export const wordReducer = (
  state = initialState,
  action: WordAction,
): WordState => {
  switch (action.type) {
    case ActionTypes.FETCH_WORD:
      return { loading: true, error: null, word: [] };
    case ActionTypes.FETCH_WORD_SUCCESS:
      return { loading: false, error: null, word: action.payload };
    case ActionTypes.FETCH_WORD_ERROR:
      return { loading: false, error: action.payload, word: [] };
    default:
      return state;
  }
};
