import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from '../components/Home/index'

Enzyme.configure({ adapter: new Adapter() })

describe('Test Case for Home Page', () => {
    test('Home page is renders correctly', () => {
      const wrapper = render(
        <MemoryRouter>
          <Home/>
       </MemoryRouter>
      );   
      const linkWatches = wrapper.queryAllByText('Watches');
      expect(linkWatches).toHaveLength(1);

      const linkIphones = wrapper.queryAllByText('Iphones');
      expect(linkIphones).toHaveLength(1);

      expect(wrapper().html()).toMatchSnapshot();
    });
});