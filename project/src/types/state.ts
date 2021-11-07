import {AuthorizationStatus} from '../const';
import {Film} from './films';
import {RootState} from '../store/root-reducer';

export type FilmType = {
  genre: string,
  countFilm: number,
  filmList: Film[],
  isDataLoaded: boolean,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
};

export type State = RootState;
