// ripped off mobx-router5 router store to make it an mst store ;)
import { computed } from 'mobx';
import { types } from 'mobx-state-tree';
import transitionPath, { shouldUpdateNode } from 'router5-transition-path';

const RouterStore = types.model({
	route: types.maybe(types.frozen()),
	previousRoute: types.maybe(types.frozen()),
	transitionRoute: types.maybe(types.frozen()),
	transitionError: types.maybe(types.frozen()),
	intersectionNode: types.optional(types.string, ''),
	toActivate: types.optional(types.array(types.string), []),
	toDeactivate: types.optional(types.array(types.string), []),
})
.actions(self => {
	return {
		setRouter(router) {
	    self.router = router;
	  },

	  updateRoute(routeType, route) {
	    self[routeType] = route;
	  },

	  resetRoute(routeType) {
	    self[routeType] = null;
	  },

	  //  ===========
	  //  = ACTIONS =
	  //  ===========
	  // These are called by the plugin
	  onTransitionStart(route, previousRoute) {
	    this.updateRoute('transitionRoute', route);
	    this.transitionError = null;
	  },

	  onTransitionSuccess(route, previousRoute, opts) {
	    self.updateRoute('route', route);
	    self.updateRoute('previousRoute', previousRoute);
	    if (route) {
	      const { intersection, toActivate, toDeactivate } = transitionPath(route, previousRoute);
	      self.intersectionNode = opts.reload ? '' : intersection;
	      self.toActivate = toActivate;
	      self.toDeactivate = toDeactivate;
	    }
	    self.clearErrors();
	  },

	  onTransitionCancel(route, previousRoute) {
	    self.resetRoute('transitionRoute');
	  },

	  onTransitionError(route, previousRoute, transitionError) {
	    self.updateRoute('transitionRoute', route);
	    self.updateRoute('previousRoute', previousRoute);
	    self.transitionError = transitionError;
	  },

	  // These can be called manually
	  clearErrors() {
	    self.resetRoute('transitionRoute');
	    self.transitionError = null;
	  },

	  // Public API, we can manually call these router methods
	  // Note: These are not actions because they don't directly modify the state

	  // Just an alias
	  navigate(name, params, opts) {
	    self.router.navigate(name, params, opts);
	  },
	};
})
.views(self => ({
	  // Utility to calculate which react routeNode should update
	  shouldUpdateNodeFactory(nodeName) {
			return computed(() => {
	      return shouldUpdateNode(nodeName)(self.route, self.previousRoute);
	    });
	  },
}));

export default RouterStore;
