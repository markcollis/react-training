import 'babel-polyfill';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { createStore, Store } from 'redux';
import { Provider } from 'react-redux';

import Root from './modules/root/components/root';
import { rootReducer } from './modules/root/root-reducer';

// TS doesn't know about the devtools extension
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: any
  }
}

const store: Store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : v => v
);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
