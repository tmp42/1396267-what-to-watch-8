import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';
import {loadComments, loadFilms, requireAuthorization, requireLogout} from '../store/action';

export enum ActionType {
  ChangeGenre = 'film/ChangeGenre',
  AddFilm = 'film/AddFilm',
  ResetGenreFilm = 'film/ResetGenreFilm',
  LoadFilms = 'load/LoadFilms',
  LoadComments = 'load/comments',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
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

export type LoadFilms = {
  type: ActionType.LoadFilms;
  payload: any;
};

export type LoadComments = {
  type: ActionType.LoadComments;
  payload: any;
};

export type Actions = ChangeGenre | AddFilm | ResetGenreFilm | LoadFilms | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout> | LoadComments | ReturnType<typeof loadComments>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
