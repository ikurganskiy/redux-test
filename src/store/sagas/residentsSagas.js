import { all, put, call } from "redux-saga/effects";

import { API } from '../../network/api';

import {fetchResidentsSuccess} from '../actions';

export function* fetchResidentsSaga(action) {
  const ids = action.payload;
  try {
    const result = yield all(ids.map(id => call(API.get, `people/${id}/`)))
    yield put(fetchResidentsSuccess(result.map(({data}) => data)))
  }
  catch(err) {
    console.log(err)
  }
}