import { combineReducers } from 'redux'
import planets from './planets';
import films from './films';

export default combineReducers({
  planets,
  films
})