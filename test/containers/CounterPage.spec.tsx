import * as React from 'react';
import Enzyme, { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'react-router-redux';
import CounterPage from '../../src/Renderer/containers/CounterPage';
import configureStore from '../../src/Renderer/store/configureStore.dev'


function setup(initialState?) {
  const store = configureStore.configureStore(initialState);
  const history = createBrowserHistory();
  const provider = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CounterPage />
      </ConnectedRouter>
    </Provider>
  );
  const app = mount(provider);
  return {
    app,
    buttons: app.find('button'),
    p: app.find('.counter')
  };
}

describe('containers', () => {
  describe('App', () => {
    it('should display initial count', () => {
      const { p } = setup();
      expect(p.text()).toMatch(/^0$/);
    });

    it('should display updated count after increment button click', () => {
      const { buttons, p } = setup();
      buttons.at(0).simulate('click');
      expect(p.text()).toMatch(/^1$/);
    });

    it('should display updated count after descrement button click', () => {
      const { buttons, p } = setup();
      buttons.at(1).simulate('click');
      expect(p.text()).toMatch(/^-1$/);
    });

    it('shouldnt change if even and if odd button clicked', () => {
      const { buttons, p } = setup();
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^0$/);
    });

    it('should change if odd and if odd button clicked', () => {
      const { buttons, p } = setup({counter: { counter: 1 }});
      buttons.at(2).simulate('click');
      expect(p.text()).toMatch(/^2$/);
    });
  });
});