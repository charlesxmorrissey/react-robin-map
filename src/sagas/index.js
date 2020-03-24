import { takeLatest } from 'redux-saga/effects'

import {
  LOCATIONS_REQUESTED,
  SPACES_REQUESTED,
  SPACE_REQUESTED,
} from 'store/actionTypes'

import { locationsWatcher, spacesWatcher, spaceWatcher } from './robin/sagas'

export default function* rootSaga() {
  yield takeLatest(LOCATIONS_REQUESTED, locationsWatcher)
  yield takeLatest(SPACES_REQUESTED, spacesWatcher)
  yield takeLatest(SPACE_REQUESTED, spaceWatcher)
}
