import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Devices from '../components/Devices/index'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe("Devices list", () => {
    test('Devices is renders correctly', () => {
        const wrapper = render(
          <MemoryRouter>
            <Devices/>
         </MemoryRouter>
        );  
      expect(wrapper.html()).toMatchSnapshot();
    });
  });