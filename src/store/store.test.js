import configureStore from './configureStore'

describe('store', () => {
  const store = configureStore()

  it('should initialize', () => {
    const actualState = store.getState()
    const intialState = {
      robin: {
        test: 'test',
        isLoading: false,
      },
    }
    expect(intialState).toEqual(actualState)
  })
})
