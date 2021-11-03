import {ActionType} from '../types/action';
import {Films} from '../types/films';
import {AuthorizationStatus} from '../const';

export const changeGenreAction = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
});


export const changeAddFilm = (colFilm: number) => ({
  type: ActionType.AddFilm,
  payload: colFilm,
});

export const resetGenreFilm = () => ({
  type: ActionType.ResetGenreFilm,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const loadFilms = (films: Films[]) => ({
  type: ActionType.LoadFilms,
  payload: {
    films,
  },
} as const);

export const loadComments = (comments: Comment[]) => ({
  type: ActionType.LoadComments,
  payload: {
    comments,
  },
} as const);
