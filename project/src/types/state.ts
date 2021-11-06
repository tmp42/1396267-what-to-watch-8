import {AuthorizationStatus} from '../const';
import {Film} from './films';
import {Comment} from './comments';

export type State = {
  genre: string,
  countFilm: number,
  filmList: Film[],
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
  commentsList: Comment[],
};
