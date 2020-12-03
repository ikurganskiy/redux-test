import {
  FETCH_PLANETS_DATA,
  FETCH_PLANETS_DATA_SUCCESS,
  FETCH_PLANET_DETAILS_DATA,
  FETCH_PLANET_DETAILS_DATA_SUCCESS,
  FETCH_FILMS_DATA,
  FETCH_FILMS_DATA_SUCCESS,
  FETCH_RESIDENTS_DATA,
  FETCH_RESIDENTS_DATA_SUCCESS
} from "../types";
import {createAction} from './createAction';

export const fetchPlanets = () => createAction(FETCH_PLANETS_DATA);
export const planetsDataSuccess = data => createAction(FETCH_PLANETS_DATA_SUCCESS, data);

export const fetchPlanetDetails = (id) => createAction(FETCH_PLANET_DETAILS_DATA, id);
export const planetDetailsSuccess = data => createAction(FETCH_PLANET_DETAILS_DATA_SUCCESS, data);

export const fetchFilms = (ids) => createAction(FETCH_FILMS_DATA, ids);
export const fetchFilmsSuccess = data => createAction(FETCH_FILMS_DATA_SUCCESS, data)

export const fetchResidents = (ids) => createAction(FETCH_RESIDENTS_DATA, ids);
export const fetchResidentsSuccess = data => createAction(FETCH_RESIDENTS_DATA_SUCCESS, data)