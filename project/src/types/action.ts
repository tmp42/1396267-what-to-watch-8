export enum ActionType {
  ChangeGenre = 'film/ChangeGenre',
  AddFilm = 'film/AddFilm'
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type AddFilm = {
  type: ActionType.AddFilm;
  payload: number;
};

export type Actions = ChangeGenre | AddFilm;
