import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import { Root } from './modules/root/components/root';
import { rootReducer } from './modules/root/root-reducer';

const store = configureStore({ reducer: rootReducer });
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
