import {
  selectRobin,
  selectLocations,
  selectCurrentLocation,
} from './selectors'

describe('Robin selectors', () => {
  describe('select Robin', () => {
    it('should return a default state', () => {
      const mockedState = {
        robin: {
          activeRequests: 0,
          locations: [],
          errors: [],
          currentLocation: null,
          currentSpace: null,
        },
      }

      const robin = selectRobin(mockedState)
      expect(robin).toEqual(mockedState.robin)
    })
  })

  describe('select locations', () => {
    it('should return an array of location objects', () => {
      const mockedState = {
        robin: {
          activeRequests: 0,
          locations: [{ id: 11111 }, { id: 22222 }, { id: 33333 }],
          errors: [],
          currentLocation: null,
          currentSpace: null,
        },
      }

      const selector = selectLocations()
      const locations = selector(mockedState)
      expect(locations).toEqual(mockedState.robin.locations)
    })
  })

  describe('select currentLocation', () => {
    it('should return a location object for the current location', () => {
      const mockedState = {
        robin: {
          activeRequests: 0,
          locations: [{ id: 11111 }, { id: 22222 }, { id: 33333 }],
          errors: [],
          currentLocation: { id: 11111 },
          currentSpace: null,
        },
      }

      const selector = selectCurrentLocation()
      const currentLocation = selector(mockedState)
      expect(currentLocation).toEqual(mockedState.robin.currentLocation)
    })
  })
})
