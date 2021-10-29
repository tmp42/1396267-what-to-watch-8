import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {FIRST_GENRE} from '../const';

const initialState = {
  genre: FIRST_GENRE,
  filmList: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload};
    default:
      return state;
  }
};

export {reducer};
