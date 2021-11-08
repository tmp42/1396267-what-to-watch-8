import {combineReducers} from 'redux';
import {filmProcess} from './film-data/film-data';
import {userProcess} from './user-data/user-data';

export enum NameSpace {
  data = 'FILM',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.data]: filmProcess,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
