import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Watches from '../components/Pages/Watches/index'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe("Watches list", () => {
    test('Watches is renders correctly', () => {
        const wrapper = render(
          <MemoryRouter>
            <Watches/>
         </MemoryRouter>
        );  
      expect(wrapper.html()).toMatchSnapshot();
    });
  });