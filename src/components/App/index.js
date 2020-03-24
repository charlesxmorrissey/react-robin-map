import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'

import {
  fetchLocations,
  fetchSpaces,
  fetchSpace,
  resetSpace,
} from 'store/robin/actions'
import { selectCurrentLocation, selectShowSidebar } from 'store/selectors'
import { getLocationFromPathname, getSpaceIdFromPathname } from 'utils/robin'
import { LOCATIONS, LOCATION_DEFAULT } from 'constants/index'

import Levels from 'components/Levels'
import Sidebar from 'components/Sidebar'

import styles from './App.module.scss'

const App = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const history = useHistory()
  const currentLocation = useSelector(selectCurrentLocation())
  const showSidebar = useSelector(selectShowSidebar())

  useEffect(() => {
    dispatch(fetchLocations())
  }, [dispatch])

  // If location is anything other than a valid office, route to default
  const onPathnameUpdate = useCallback(() => {
    const locationName = getLocationFromPathname(location.pathname)
    const spaceId = getSpaceIdFromPathname(location.pathname)

    if (locationName) {
      dispatch(fetchSpaces(locationName))
    } else {
      history.push(LOCATION_DEFAULT)
    }

    if (spaceId) {
      dispatch(fetchSpace(spaceId))
    } else {
      dispatch(resetSpace())
    }
  }, [location, dispatch, history])

  useEffect(() => {
    onPathnameUpdate()
  }, [onPathnameUpdate])

  return (
    <main className={styles.app}>
      <div className={styles.appMain}>
        <div className={styles.appStage}>
          <Levels
            locationKey={
              currentLocation
                ? currentLocation.name
                : LOCATIONS[LOCATION_DEFAULT]
            }
          />
        </div>
      </div>

      <Sidebar showSidebar={showSidebar} />
    </main>
  )
}

export default App
