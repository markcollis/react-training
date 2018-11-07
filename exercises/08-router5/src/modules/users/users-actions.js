import { flow } from 'mobx-state-tree';

import { addUser } from 'modules/users/users-effects';
import * as Routes from 'modules/router/routes';

export default self => ({
  addUser: flow(function* (user) {
    try {
      yield addUser(user);
      self.fetchEntities(Routes.USERS_LIST);
    } catch (error) {
      console.log(error.message);
    }
  }),
});
