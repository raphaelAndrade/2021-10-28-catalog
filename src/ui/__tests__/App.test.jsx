import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../components/App/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case For App', () => {
  it('should render app', () => {
    const wrapper = shallow(<App />)
  })
})