import { createSelector } from 'reselect'

export const selectRobin = (state) => state.robin

export const selectShowSidebar = () =>
  createSelector(selectRobin, (substate) => substate.showSidebar)

export const selectLocations = () =>
  createSelector(selectRobin, (substate) => substate.locations)

export const selectCurrentLocation = () =>
  createSelector(selectRobin, (substate) => substate.currentLocation)

export const selectCurrentSpaces = () =>
  createSelector(selectRobin, (substate) => {
    const { currentLocation } = substate

    return currentLocation ? currentLocation.spaces : []
  })

export const selectCurrentSpace = () =>
  createSelector(selectRobin, (substate) => substate.currentSpace)

export const selectCurrentLevels = () =>
  createSelector(selectRobin, (substate) => {
    const { currentLocation } = substate
    let levels

    if (currentLocation && currentLocation.levels && currentLocation.spaces) {
      levels = currentLocation.levels.map((level, index) => {
        return {
          name: level.name,
          id: level.id,
          level: index,
          spaces: currentLocation.spaces.filter(
            (space) => space.level_id === level.id
          ),
        }
      })
    } else {
      levels = []
    }

    return levels
  })

export const selectCurrentLevel = () =>
  createSelector(selectRobin, (substate) => {
    const { currentSpace, currentLocation } = substate
    let level

    if (currentLocation && currentLocation.levels && currentSpace) {
      level = currentLocation.levels.find(
        (item) => currentSpace.level_id === item.id
      )
    }

    return level
  })
