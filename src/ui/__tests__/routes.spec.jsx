import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import {mount, configure} from 'enzyme';
import App from '../components/App';
import Home from '../components/Home';
import Iphones from '../components/Pages/Iphones/index';
import Watches from '../components/Pages/Watches/index';
import NotFound from '../components/NotFound';

describe('Application routes', () => {
  it('should render a Home component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should render a Watch component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/iphones']}>
        <Iphones />
      </MemoryRouter>
    );

    expect(wrapper.find(Iphones)).toHaveLength(1);
  });

  it('should render a Watch component', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/watches']}>
        <Watches />
      </MemoryRouter>
    );

    expect(wrapper.find(Watches)).toHaveLength(1);
  });

  it("should render a Page 404", () => {
    const wrapper = mount(
      <MemoryRouter
        await
        initialEntries={["/device", "/ihpoes", "/watcheses"]}
      >
        <NotFound />
      </MemoryRouter>
    );

    expect(wrapper.find(NotFound)).toHaveLength(1);
  });
});


