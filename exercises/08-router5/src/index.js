import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { autorun } from 'mobx';
import { getSnapshot } from 'mobx-state-tree';
import { Provider } from 'mobx-react';
import { connectReduxDevtools } from 'mst-middlewares';
import remoteDev from 'remotedev';

import createRouter from 'modules/router/create-router';
import RootStore from 'modules/root/root-store';
import RouterStore from 'modules/router/router-store';

import Root from 'modules/root/components/root';

import routes, { USERS_LIST } from 'modules/router/routes';

const routerStore = RouterStore.create();
const router = createRouter(routerStore, routes, { defaultRoute: USERS_LIST });

const store = RootStore.create({ router: routerStore });
connectReduxDevtools(remoteDev, store);

// listen for route changes the mobx way
autorun(() => {
  const route = routerStore.route;
  if (!route) {
    return;
  }
  store.routeTransitioned();
});

router.start(() => {
  ReactDOM.render(
    <Provider store={store} routerStore={routerStore}>
      <Root />
    </Provider>,
    document.getElementById('root')
  );
});
