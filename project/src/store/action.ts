import {ActionType} from '../types/action';
import {Films} from '../types/films';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeGenreAction = (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const changeAddFilm = (colFilm: number) => ({
  type: ActionType.AddFilm,
  payload: colFilm,
} as const);

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

export const loadFilms = (filmList: Films[]) => ({
  type: ActionType.LoadFilms,
  payload: {
    filmList,
  },
} as const);

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);
