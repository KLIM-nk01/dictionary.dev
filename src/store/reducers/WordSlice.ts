import { IWord } from '../models/IWord';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WordState {
  words: IWord[];
  isLoading: boolean;
  error: string;
}

const initialState: WordState = {
  words: [],
  isLoading: false,
  error: '',
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    wordFetching(state) {
      state.isLoading = true;
    },
    wordFetchingSuccess(state, action: PayloadAction<IWord[]>) {
      state.isLoading = false;
      state.error = '';
      state.words = action.payload;
    },
    wordFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default wordSlice.reducer;
