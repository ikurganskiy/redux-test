import {FETCH_PLANETS_DATA_SUCCESS, FETCH_PLANET_DETAILS_DATA_SUCCESS} from '../types'

const INITIAL_STATE = {};

const planetsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_PLANETS_DATA_SUCCESS: {
      return { ...state, planets:action.payload }
    }
    case FETCH_PLANET_DETAILS_DATA_SUCCESS: {
      return { ...state, planet:action.payload }
    }
    default: {
      return state;
    }
  }
}

export default planetsReducer;