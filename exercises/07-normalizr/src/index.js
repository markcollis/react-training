import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import { connectReduxDevtools } from 'mst-middlewares';
import remoteDev from 'remotedev';

import rootStore from 'modules/root/root-store';
import Root from 'modules/root/components/root';

const store = rootStore.create();

connectReduxDevtools(remoteDev, store);
store.getUsers();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);
