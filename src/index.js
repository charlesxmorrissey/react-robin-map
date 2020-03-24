import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from 'store/configureStore'
import rootSaga from 'sagas'
import * as serviceWorker from 'serviceWorker'

import 'assets/styles/index.scss'

import App from 'components/App'

const store = configureStore()

store.runSaga(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* istanbul ignore next */
serviceWorker.unregister()
