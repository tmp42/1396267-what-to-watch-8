import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from './state';
import {redirectToRoute, requireAuthorization, requireLogout} from '../store/action';
import {Films} from './films';

export enum ActionType {
  ChangeGenre = 'film/ChangeGenre',
  AddFilm = 'film/AddFilm',
  SelectFilm = 'film/SelectFilm',
  ResetGenreFilm = 'film/ResetGenreFilm',
  LoadFilms = 'load/LoadFilms',
  LoadComments = 'load/comments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'film/redirectToRoute'
}

export type ChangeGenre = {
  type: ActionType.ChangeGenre;
  payload: string;
};

export type SelectFilm = {
  type: ActionType.SelectFilm;
  payload: Films;
};

export type AddFilm = {
  type: ActionType.AddFilm;
  payload: number;
};

export type ResetGenreFilm = {
  type: ActionType.ResetGenreFilm;
  payload: number;
};

export type LoadFilms = {
  type: ActionType.LoadFilms;
  payload: any;
};

export type LoadComments = {
  type: ActionType.LoadComments;
  payload: any;
};

export type Actions = ChangeGenre | AddFilm | ResetGenreFilm | LoadFilms
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout> | LoadComments | ReturnType<typeof requireLogout>
  | ReturnType<typeof redirectToRoute> | SelectFilm;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
