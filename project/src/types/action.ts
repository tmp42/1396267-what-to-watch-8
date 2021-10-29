export enum ActionType {
  ChangeGenre = 'film/ChangeGenre',
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};


export const changeGenreAction = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});

export type Actions = ChangeGenre;
