import { flow } from 'mobx-state-tree';

import { mapRouteToFetchParams } from 'modules/crud/crud-config';

export default self => ({
	fetchEntities: flow(function* (routeName) {
		try {
			const params = mapRouteToFetchParams(routeName);
			if (!params) {
				return;
			}

			const entities = Object.keys(params);
			for(let i = 0; i < entities.length; i++) {
				const entity = entities[i];
				const { effect, schema, effectParamsFactory = () => [] } = params[entity];
				const routeParams = self.router.route && self.router.route.params || {};
				const data = yield effect(...effectParamsFactory(routeParams));

				if (data) {
					self.crud[routeName] = { [entity]: self.normalizeAndStore(data, schema) };
				}
			}
		} catch (e) {
			console.log('FAILED TO LOAD', e);
		}
	}),

	routeTransitioned() {
	  self.router.toActivate.map(routeName => self.fetchEntities(routeName));
	},
});
