import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
  LOCATIONS_REQUESTED,
  LOCATIONS_SUCCESS,
  LOCATIONS_ERROR,
  SPACES_REQUESTED,
  SPACES_SUCCESS,
  SPACES_ERROR,
  SPACE_REQUESTED,
  SPACE_SUCCESS,
  SPACE_ERROR,
  SPACE_RESET,
} from 'store/actionTypes'

export const incrementRequest = () => ({
  type: INCREMENT_REQUEST,
})

export const decrementRequest = () => ({
  type: DECREMENT_REQUEST,
})

export const fetchLocations = () => ({
  type: LOCATIONS_REQUESTED,
})

export const fetchLocationsSuccess = (locations) => ({
  type: LOCATIONS_SUCCESS,
  locations,
})

export const fetchLocationsError = (error) => ({
  type: LOCATIONS_ERROR,
  error,
})

export const fetchSpaces = (locationName) => ({
  type: SPACES_REQUESTED,
  locationName,
})

export const fetchSpacesSuccess = (currentLocation, levels, spaces) => ({
  type: SPACES_SUCCESS,
  currentLocation,
  levels,
  spaces,
})

export const fetchSpacesError = (error) => ({
  type: SPACES_ERROR,
  error,
})

export const fetchSpace = (spaceId) => ({
  type: SPACE_REQUESTED,
  spaceId,
})

export const fetchSpaceSuccess = (currentSpace) => ({
  type: SPACE_SUCCESS,
  currentSpace,
})

export const fetchSpaceError = (error) => ({
  type: SPACE_ERROR,
  error,
})

export const resetSpace = () => ({
  type: SPACE_RESET,
})
