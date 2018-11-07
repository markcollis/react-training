import { types } from 'mobx-state-tree';

import Entities from 'modules/entities/entities-store';
import Crud from 'modules/crud/crud-store';
import Users from 'modules/users/users-store';
import RouterStore from 'modules/router/router-store';

import crudViews from 'modules/crud/crud-views';
import usersViews from 'modules/users/users-views';

import entitiesActions from 'modules/entities/entities-actions';
import crudActions from 'modules/crud/crud-actions';
import usersActions from 'modules/users/users-actions';

const Store = types
	.model({
		entities: types.optional(Entities, {}),
		crud: types.optional(Crud, {}),
		user: types.optional(Users, {}),
		router: RouterStore,
	})
	.views(crudViews)
	.views(usersViews)
	.actions(entitiesActions)
	.actions(crudActions)
	.actions(usersActions);

export default Store;
