import { takeEvery, all } from "redux-saga/effects";

import { 
  FETCH_PLANETS_DATA,
  FETCH_PLANET_DETAILS_DATA,
  FETCH_FILMS_DATA
} from "../types";
import { fetchPlanetsSaga, fetchPlanetDetailsSaga } from "./planetsSagas";
import { fetchFilmsSaga } from "./filmsSagas";

function* watchAllSagas() {
  yield all([
    takeEvery(FETCH_PLANETS_DATA, fetchPlanetsSaga),
    takeEvery(FETCH_PLANET_DETAILS_DATA, fetchPlanetDetailsSaga),
    takeEvery(FETCH_FILMS_DATA, fetchFilmsSaga)
  ]);
}

export default watchAllSagas;
