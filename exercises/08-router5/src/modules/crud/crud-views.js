import { USER_DETAIL, USERS_LIST } from 'modules/router/routes';

export default self => ({
  get hasUsersList() {
    const { crud } = self;
    return Boolean(crud[USERS_LIST]) && Boolean(crud[USERS_LIST].users);
  },

  get usersList() {
    return self.hasUsersList ? self.crud[USERS_LIST].users : [];
  },

  get hasUserDetail() {
    const { crud } = self;
    return Boolean(crud[USER_DETAIL]) && Boolean(crud[USER_DETAIL].user);
  },

  get userDetail() {
    return self.hasUserDetail ? self.crud[USER_DETAIL].user : null;
  },

  get hasSkills() {
    const { crud } = self;
    return Boolean(crud[USERS_LIST]) && Boolean(crud[USERS_LIST].skills);
  },

  get skillsList() {
    return self.hasSkills ? self.crud[USERS_LIST].skills : [];
  },
});
