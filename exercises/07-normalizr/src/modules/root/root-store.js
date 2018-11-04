import { types } from 'mobx-state-tree';

import Entities from 'modules/entities/entities-store';
import Users from 'modules/users/users-store';

import usersViews from 'modules/users/users-views';

import entitiesActions from 'modules/entities/entities-actions';
import usersActions from 'modules/users/users-actions';

const Store = types
	.model({
		entities: types.optional(Entities, {}),
		user: types.optional(Users, {}),
	})
	.views(usersViews)
	.actions(entitiesActions)
	.actions(usersActions);

export default Store;
