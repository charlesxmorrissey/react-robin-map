import React from 'react'
import { Router } from 'react-router-dom'

import Adapter from 'enzyme-adapter-react-16'
import { mount, configure } from 'enzyme'
import { createMemoryHistory } from 'history'

import App from './index'
// import Sidebar from '../Sidebar'

configure({ adapter: new Adapter() })

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
}))

describe('<App />', () => {
  it('should match the snapshot', () => {
    const history = createMemoryHistory({ initialEntries: ['/bk/51337'] })
    const component = mount(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(component.find(App)).toMatchSnapshot()
  })

  it('should match the snapshot', () => {
    const history = createMemoryHistory()
    const component = mount(
      <Router history={history}>
        <App />
      </Router>
    )
    expect(component.find(App)).toMatchSnapshot()
  })
})
