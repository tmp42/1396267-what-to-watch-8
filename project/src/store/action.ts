import {ActionType, ChangeGenre} from '../types/action';

export const changeGenre = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);
