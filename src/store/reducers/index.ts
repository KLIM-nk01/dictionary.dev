import { combineReducers } from 'redux';
import { wordReducer } from './wordReducer';

export const rootReducer = combineReducers({
  wordState: wordReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
