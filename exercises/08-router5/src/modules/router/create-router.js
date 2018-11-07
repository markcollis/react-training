import { createRouter } from 'router5';
import browserPlugin from 'router5/plugins/browser';

import { mobxPlugin } from 'mobx-router5';

export default (routerStore, routes, config) => {
  const router = createRouter(routes, config)
    .usePlugin(mobxPlugin(routerStore)) // Important: pass the store to the plugin!
    .usePlugin(browserPlugin({ useHash: false }));

  return router;
};
