import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import { Root } from './modules/root/components/root';
import { rootReducer } from './modules/root/root-reducer';
import { rootSaga } from './modules/root/root-saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
});
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
