import { put, call } from "redux-saga/effects";

import { API } from '../../network/api';

import { planetsDataSuccess, planetDetailsSuccess } from '../actions'

export function* fetchPlanetsSaga() {
  try {
    const { data:{results:planets} } = yield call(API.get, 'planets');
    yield put(planetsDataSuccess(planets));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchPlanetDetailsSaga(action) {
  try {
    const id = action.payload 
    const { data } = yield call(API.get, `planets/${id}`);
    yield put(planetDetailsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}