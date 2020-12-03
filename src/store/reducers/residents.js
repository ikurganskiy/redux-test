import {FETCH_RESIDENTS_DATA_SUCCESS} from '../types'

const INITIAL_STATE = {};

const residentsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case FETCH_RESIDENTS_DATA_SUCCESS: {
        return { ...state, residents:action.payload }
      }
      default: {
        return state;
      }
    }
}

export default residentsReducer;