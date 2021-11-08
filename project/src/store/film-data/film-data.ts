import {createReducer} from '@reduxjs/toolkit';
import {FIRST_COUNT_FILM, FIRST_GENRE} from '../../const';
import {changeAddFilm, changeGenreAction, loadFilms, resetGenreFilm} from '../action';
import {Film} from '../../types/films';
import {FilmType} from '../../types/state';

const initialState: FilmType = {
  genre: FIRST_GENRE,
  countFilm: FIRST_COUNT_FILM,
  filmList: [] as unknown as Film[],
  isDataLoaded: false,
};

const filmProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(changeAddFilm, (state, action) => {
      state.countFilm = state.countFilm + action.payload;
    })
    .addCase(resetGenreFilm, (state, action) => {
      state.genre = FIRST_GENRE;
      state.countFilm = FIRST_COUNT_FILM;
    })
    .addCase(loadFilms, (state, action) => {
      state.filmList = action.payload;
      state.isDataLoaded = true;
    });
});

export {filmProcess};
