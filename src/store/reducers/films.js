import {FETCH_FILMS_DATA_SUCCESS} from '../types'

const INITIAL_STATE = {};

const filmsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case FETCH_FILMS_DATA_SUCCESS: {
        return { ...state, films:action.payload }
      }
      default: {
        return state;
      }
    }
}

export default filmsReducer;