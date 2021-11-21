import {combineReducers} from 'redux';
import {filmProcess} from './film-data/film-data';
import {userProcess} from './user-data/user-data';

export enum NameSpace {
  Data = 'FILM',
  User = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmProcess,
  [NameSpace.User]: userProcess,
});

export type RootState = ReturnType<typeof rootReducer>;
