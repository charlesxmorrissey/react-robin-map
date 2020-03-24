import { call, put, select } from 'redux-saga/effects'
import {
  incrementRequest,
  decrementRequest,
  fetchLocationsSuccess,
  fetchLocationsError,
  fetchSpacesSuccess,
  fetchSpacesError,
  fetchSpaceSuccess,
  fetchSpaceError,
} from 'store/robin/actions'
import { selectLocations } from 'store/selectors'
import Robin from 'robin-js-sdk/dist/robin.browser.js'

const ORGANIZATION_ID = process.env.REACT_APP_ROBIN_ORGANIZATION_ID

const robin = new Robin(process.env.REACT_APP_ROBIN_API_ACCESS_TOKEN)

// robin-js-sdk is a project that is not finished or maintained
// by leveraging this internal GET method, custom queries can be created
// needs class wrapper to play nicely with redux-saga
export class RobinAPI {
  GET = (param) => {
    return robin.api
      .GET(param)
      .then((result) => result)
      .catch((error) => error)
  }
}

const api = new RobinAPI()

export function* fetchLocations() {
  try {
    const locationsQuery = `/organizations/${ORGANIZATION_ID}/locations`
    const locations = yield call(api.GET, locationsQuery)
    yield put(fetchLocationsSuccess(locations.getData()))
  } catch (error) {
    yield put(fetchLocationsError(error))
  }
}

export function* fetchLevels(location) {
  try {
    const levelsQuery = `/locations/${location.id}/levels`
    const levels = yield call(api.GET, levelsQuery)
    return levels
  } catch (error) {
    return error
  }
}

export function* fetchSpaces(location) {
  try {
    const spacesQuery = `/locations/${location.id}/spaces?per_page=300`
    const spaces = yield call(api.GET, spacesQuery)
    return spaces
  } catch (error) {
    return error
  }
}

export function* fetchSpace(id) {
  try {
    const spaceQuery = `/spaces/${id}?include=notes`
    const spaces = yield call(api.GET, spaceQuery)
    yield put(fetchSpaceSuccess(spaces.getData()))
  } catch (error) {
    yield put(fetchSpaceError(error))
  }
}

export function* locationsWatcher() {
  yield put(incrementRequest())
  yield fetchLocations()
  yield put(decrementRequest())
}

export function* spacesWatcher(action) {
  yield put(incrementRequest())

  if (!(yield select(selectLocations)).length) {
    yield fetchLocations()
  }

  const { locationName } = action
  const locations = yield select(selectLocations())

  const currentLocation = locations.find(
    (location) => location.name === locationName
  )
  const levels = yield fetchLevels(currentLocation)
  const spaces = yield fetchSpaces(currentLocation)

  if (currentLocation && levels.getData && spaces.getData) {
    yield put(
      fetchSpacesSuccess(currentLocation, levels.getData(), spaces.getData())
    )
  } else {
    yield put(fetchSpacesError, 'there was an error fetching data')
  }

  yield put(decrementRequest())
}

export function* spaceWatcher(action) {
  yield put(incrementRequest())

  const { spaceId } = action
  yield fetchSpace(spaceId)
  yield put(decrementRequest())
}
