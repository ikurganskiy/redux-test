import { all, put, call } from "redux-saga/effects";

import { API } from '../../network/api';

import {fetchFilmsSuccess} from '../actions';

export function* fetchFilmsSaga(action) {
  const ids = action.payload;
  try {
    const result = yield all(ids.map(id => call(API.get, `films/${id}/`)))
    yield put(fetchFilmsSuccess(result.map(({data}) => data)))
  }
  catch(err) {
    console.log(err)
  }
}