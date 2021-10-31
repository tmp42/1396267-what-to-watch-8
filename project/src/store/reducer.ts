import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {FIRST_GENRE, FIRST_COUNT_FILM} from '../const';

const initialState = {
  genre: FIRST_GENRE,
  countFilm: FIRST_COUNT_FILM,
  filmList: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.AddFilm:
      return {...state, countFilm: state.countFilm + action.payload};
    case ActionType.ResetGenreFilm:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
