import {AuthorizationStatus} from '../const';
import {Films} from './films';
import {Comments} from './comments';

export type State = {
  genre: string,
  countFilm: number,
  filmList: Films[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  commentsList: Comments[],
};
