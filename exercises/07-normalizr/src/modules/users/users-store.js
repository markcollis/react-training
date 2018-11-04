import { types } from 'mobx-state-tree';

import { User } from 'modules/entities/entities-store';

const Store = types.model({
    title: 'React is the best',
    users: types.optional(types.array(types.reference(User)), []),
});

export default Store;
