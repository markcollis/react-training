import { types } from 'mobx-state-tree';

const Store = types.model({
    title: 'React is the best',
    userIds: types.optional(types.array(types.string), []),
});

export default Store;
