import reducer from './reducer'
import * as types from '../ActionTypes'

describe('Robin API reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      test: 'test',
      isLoading: false,
    })
  })

  it('should handle INIT_ROBIN_API', () => {
    expect(
      reducer(undefined, {
        type: types.INIT_ROBIN_API,
      })
    ).toEqual({
      test: 'init robin api!',
      isLoading: false,
    })
  })
})
