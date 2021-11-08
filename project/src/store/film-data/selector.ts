import { NameSpace } from '../root-reducer';
import type {State} from '../../types/state';
import {Film} from '../../types/films';

export const getMovies = (state: State): Film[] => state[NameSpace.data].filmList;
export const getCountMovie = (state: State): number => state[NameSpace.data].countFilm;
export const getCurrentGenre = (state: State): string => state[NameSpace.data].genre;
export const getIsLoaded = (state: State): boolean => state[NameSpace.data].isDataLoaded;
