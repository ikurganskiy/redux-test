import { put, call } from "redux-saga/effects";

import { API } from '../../network/api';

import { planetsDataSuccess, planetDetailsSuccess } from '../actions'

export function* fetchPlanetsSaga() {
  try {
    const { data:{results:planets} } = yield call(API.get, 'planets');

    const modified = planets.map(item => {
      const {residents, films, ...rest} = item;

      const residentsIDs = residents.reduce((acc, item) => {
        const found = item.match(/(\d*)\/$/)
        if (found) {
          return [...acc, found[1]];
        }

        return acc;
      }, [])

      const filmsIDs = films.reduce((acc, item) => {
        const found = item.match(/(\d*)\/$/)
        if (found) {
          return [...acc, found[1]];
        }

        return acc;
      }, [])

      return {...rest, residents:residentsIDs, films:filmsIDs}
    })

    yield put(planetsDataSuccess(modified));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchPlanetDetailsSaga(action) {
  try {
    const id = action.payload 
    const { data } = yield call(API.get, `planets/${id}/`);
    yield put(planetDetailsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}