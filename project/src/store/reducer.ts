import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {FIRST_GENRE, FIRST_COUNT_FILM, AuthorizationStatus} from '../const';

const initialState = {
  genre: FIRST_GENRE,
  countFilm: FIRST_COUNT_FILM,
  filmList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  commentsList: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    case ActionType.AddFilm:
      return {...state, countFilm: state.countFilm + action.payload};
    case ActionType.ResetGenreFilm:
      return {...initialState};
    case ActionType.LoadFilms: {
      const {filmList} = action.payload;
      return {...state, filmList};
    }
    case ActionType.LoadComments: {
      const {commentsList} = action.payload;
      return {...state, commentsList};
    }
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      };
    default:
      return state;
  }
};

export {reducer};
