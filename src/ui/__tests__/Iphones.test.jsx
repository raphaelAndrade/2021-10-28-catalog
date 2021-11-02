import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Iphones from '../components/Pages/Iphones/index'
import Enzyme from 'enzyme'

Enzyme.configure({ adapter: new Adapter() })

describe("Iphones list", () => {
    test('Iphones is renders correctly', () => {
        const wrapper = render(
          <MemoryRouter>
            <Iphones/>
         </MemoryRouter>
        );  
      expect(wrapper.html()).toMatchSnapshot();
    });
  });