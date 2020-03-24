import {
  INCREMENT_REQUEST,
  DECREMENT_REQUEST,
  LOCATIONS_SUCCESS,
  LOCATIONS_ERROR,
  SPACES_SUCCESS,
  SPACES_ERROR,
  SPACE_SUCCESS,
  SPACE_ERROR,
  SPACE_RESET,
} from 'store/actionTypes'

const initialState = {
  activeRequests: 0,
  locations: [],
  errors: [],
  currentLocation: null,
  currentSpace: null,
  showSidebar: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUEST:
      return {
        ...state,
        activeRequests: state.activeRequests++,
      }

    case DECREMENT_REQUEST:
      return {
        ...state,
        activeRequests: state.activeRequests--,
      }

    case LOCATIONS_SUCCESS:
      const { locations } = action

      return {
        ...state,
        locations,
      }

    case SPACES_SUCCESS:
      const { currentLocation, levels, spaces } = action

      const sortedSpaces = spaces.sort((a, b) => {
        if (a.description) {
          return a.description.localeCompare(b.description)
        } else {
          return -1
        }
      })

      const sortedLevels = levels.map((level, index) => ({
        ...level,
        level_number: index,
      }))

      return {
        ...state,
        currentLocation: {
          ...currentLocation,
          levels: sortedLevels,
          spaces: sortedSpaces,
        },
      }

    case SPACE_SUCCESS:
      const { currentSpace } = action

      return {
        ...state,
        currentSpace: {
          ...currentSpace,
        },
      }

    case SPACE_RESET:
      return {
        ...state,
        currentSpace: null,
      }

    case LOCATIONS_ERROR:
      break

    case SPACES_ERROR:
      break

    case SPACE_ERROR:
      return {
        ...state,
        errors: [...state.errors, action.error],
      }

    default:
      return state
  }
}
