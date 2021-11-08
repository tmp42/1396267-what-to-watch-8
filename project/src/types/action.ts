import {Action} from 'redux';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  ChangeGenre = 'film/ChangeGenre',
  AddFilm = 'film/AddFilm',
  SelectFilm = 'film/SelectFilm',
  ResetGenreFilm = 'film/ResetGenreFilm',
  LoadFilms = 'load/LoadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'film/redirectToRoute'
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
