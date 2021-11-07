import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import {Film} from '../types/films';
import {AppRoute, AuthorizationStatus} from '../const';

export const changeGenreAction = createAction(
  ActionType.ChangeGenre,
  (genre: string) => ({
    payload: genre,
  }),
);

export const changeAddFilm = createAction(
  ActionType.AddFilm,
  (colFilm: number) => ({
    payload: colFilm,
  }),
);

export const resetGenreFilm = createAction(ActionType.ResetGenreFilm);


export const loadFilms = createAction(
  ActionType.LoadFilms,
  (filmList: Film[]) => ({
    payload: filmList,
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus) => ({
    payload: authStatus,
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);
