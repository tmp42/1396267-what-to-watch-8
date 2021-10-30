import {ActionType} from '../types/action';

export const changeGenreAction = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});


export const changeAddFilm = (colFilm: number) => ({
  type: ActionType.AddFilm,
  payload: colFilm,
});
