import { combineReducers } from 'redux'
import planets from './planets';
import films from './films';
import residents from './residents';

export default combineReducers({
  planets,
  films,
  residents
})