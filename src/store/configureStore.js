import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducers'

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  let enhancer

  /* istanbul ignore else */
  if (process.env.NODE_ENV !== 'production') {
    enhancer = composeWithDevTools(applyMiddleware(...middlewares))
  } else {
    enhancer = applyMiddleware(...middlewares)
  }

  const store = createStore(rootReducer, initialState, enhancer)

  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return {
    ...store,
    runSaga: sagaMiddleware.run,
  }
}
