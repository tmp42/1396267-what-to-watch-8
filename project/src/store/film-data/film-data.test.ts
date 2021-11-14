import {filmProcess} from './film-data';
import {createMockFilms} from '../../utils/mocks';
import {changeAddFilm, changeGenreAction, loadFilms, resetGenreFilm} from '../action';
import {initialState} from './film-data';
import {FIRST_COUNT_FILM} from '../../const';

const mockFilms = createMockFilms();

describe('Reducer: gameProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(filmProcess(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(initialState);
  });

  it('should change genre', () => {
    const state = {
      genre: mockFilms[2].genre,
      countFilm: FIRST_COUNT_FILM,
      filmList: mockFilms,
      isDataLoaded: false,
    };
    const newGenre = mockFilms[0].genre;
    expect(filmProcess(state, changeGenreAction(newGenre)).genre)
      .toEqual(newGenre);
  });

  it('should add film', () => {
    const state = {
      genre: mockFilms[0].genre,
      countFilm: FIRST_COUNT_FILM,
      filmList: mockFilms,
      isDataLoaded: false,
    };
    expect(filmProcess(state, changeAddFilm(8)).countFilm)
      .toEqual(16);
  });
  it('should reset film', () => {
    const state = {
      genre: mockFilms[0].genre,
      countFilm: 48,
      filmList: mockFilms,
      isDataLoaded: false,
    };
    expect(filmProcess(state, resetGenreFilm()))
      .toEqual({countFilm: FIRST_COUNT_FILM, filmList: mockFilms, genre: initialState.genre, isDataLoaded: false});
  });
  it('should load film', () => {
    const state = initialState;
    expect(filmProcess(state, loadFilms(mockFilms)))
      .toEqual({countFilm: FIRST_COUNT_FILM, filmList: mockFilms, genre: initialState.genre, isDataLoaded: true});
  });
});
