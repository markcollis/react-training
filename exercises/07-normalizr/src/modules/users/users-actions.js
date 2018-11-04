import { flow } from 'mobx-state-tree';

import { addUser, getUsers } from 'modules/users/users-effects';
import { users } from 'modules/entities/entities-schema';

export default self => ({
  // doesn't work with current dev tools middleware
  // https://github.com/mobxjs/mobx-state-tree/issues/1065
  // afterCreate() {
  //   self.getUsers();
  // },

  getUsers: flow(function* () {
    try {
      const { data } = yield getUsers();
      self.user.userIds = self.normalizeAndStore(data, users);
    } catch (error) {
      console.log(error.message);
    }
  }),

  addUser: flow(function* (user) {
    try {
      yield addUser(user);
      self.getUsers();
    } catch (error) {
      console.log(error.message);
    }
  }),
});
