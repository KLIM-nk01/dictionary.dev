export interface IWordResponse {
  word: string;
  origin: string;
  phonetics: { [key: string]: string }[];
  meanings: [
    {
      partOfSpeech: string;
      definitions: {
        definition: string;
        example: string;
        synonyms: string[];
        antonyms: string[];
      }[];
    },
  ];
}

export interface WordState {
  word: object;
  loading: boolean;
  error: null | string;
}

export enum ActionTypes {
  FETCH_WORD = 'FETCH_WORD',
  FETCH_WORD_SUCCESS = 'FETCH_WORD_SUCCESS',
  FETCH_WORD_ERROR = 'FETCH_WORD_ERROR',
}

interface FetchWordAction {
  type: ActionTypes.FETCH_WORD;
}

interface FetchWordSuccessAction {
  type: ActionTypes.FETCH_WORD_SUCCESS;
  payload: IWordResponse[];
}

interface FetchWordErrorAction {
  type: ActionTypes.FETCH_WORD_ERROR;
  payload: string;
}

export type WordAction =
  | FetchWordAction
  | FetchWordSuccessAction
  | FetchWordErrorAction;
