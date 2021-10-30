export enum ActionType {
  ChangeGenre = 'film/ChangeGenre',
  AddFilm = 'film/AddFilm',
  ResetGenreFilm = 'film/ResetGenreFilm'
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type AddFilm = {
  type: ActionType.AddFilm;
  payload: number;
};

export type ResetGenreFilm = {
  type: ActionType.ResetGenreFilm;
  payload: number;
};

export type Actions = ChangeGenre | AddFilm | ResetGenreFilm;
