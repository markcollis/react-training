import { types } from 'mobx-state-tree';

import { USER_DETAIL, USERS_LIST } from 'modules/router/routes';
import { User } from 'modules/entities/entities-store';

const UsersList = types.model({
	users: types.array(types.reference(User)),
});

const UserDetail = types.model({
	user: types.maybe(types.reference(User))
});

const Store = types.model({
	[USERS_LIST]: types.maybe(UsersList),
	[USER_DETAIL]: types.maybe(UserDetail),
});

export default Store;
