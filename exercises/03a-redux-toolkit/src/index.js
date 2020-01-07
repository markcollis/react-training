import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

// import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import Root from 'modules/root/components/root';
import rootReducer from 'modules/root/root-reducer';

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__
//     ? window.__REDUX_DEVTOOLS_EXTENSION__()
//     : v => v
// );
const store = configureStore({ reducer: rootReducer });

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
