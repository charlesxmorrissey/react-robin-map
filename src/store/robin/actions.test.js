import * as actions from './actions'
import * as types from '../actionTypes'

describe('Robin actions', () => {
  it('should create an action to increment active requests', () => {
    const expectedAction = {
      type: types.INCREMENT_REQUEST,
    }
    expect(actions.incrementRequest()).toEqual(expectedAction)
  })

  it('should create an action to decrement', () => {
    const expectedAction = {
      type: types.DECREMENT_REQUEST,
    }
    expect(actions.decrementRequest()).toEqual(expectedAction)
  })

  it('should create an action to fetch organization locations', () => {
    const expectedAction = {
      type: types.LOCATIONS_REQUESTED,
    }
    expect(actions.fetchLocations()).toEqual(expectedAction)
  })

  it('should create an action when fetchLocations is a success', () => {
    const expectedAction = {
      type: types.LOCATIONS_SUCCESS,
      locations: [],
    }
    expect(actions.fetchLocationsSuccess()).toEqual(expectedAction)
  })

  it('should create an action when fetchLocations is an error', () => {
    const expectedAction = {
      type: types.LOCATIONS_ERROR,
      errors: [],
    }
    expect(actions.fetchLocationsError()).toEqual(expectedAction)
  })

  it('should create an action to fetch location spaces', () => {
    const expectedAction = {
      type: types.SPACES_REQUESTED,
      locationName: 'New York',
    }
    expect(actions.fetchSpaces()).toEqual(expectedAction)
  })

  it('should create an action when fetchSpaces is a success', () => {
    const expectedAction = {
      type: types.SPACES_SUCCESS,
      spaces: [],
    }
    expect(actions.fetchSpacesSuccess()).toEqual(expectedAction)
  })

  it('should create an action when fetchSpaces is an error', () => {
    const expectedAction = {
      type: types.SPACES_ERROR,
      error: [],
    }
    expect(actions.fetchSpacesError()).toEqual(expectedAction)
  })

  it('should create an action to fetch a given space', () => {
    const expectedAction = {
      type: types.SPACE_REQUESTED,
      spaceId: 11111,
    }
    expect(actions.fetchSpace()).toEqual(expectedAction)
  })

  it('should create an action when fetchSpace is a success', () => {
    const expectedAction = {
      type: types.SPACE_SUCCESS,
      currentSpace: {},
    }
    expect(actions.fetchSpaceSuccess()).toEqual(expectedAction)
  })

  it('should create an action when fetchSpace is an error', () => {
    const expectedAction = {
      type: types.SPACE_ERROR,
      error: [],
    }
    expect(actions.fetchSpaceError()).toEqual(expectedAction)
  })
})
