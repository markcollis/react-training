import { toRoman } from 'roman-numerals';
import { flow } from 'lodash';

const convertUserRegnalNumber = user => ({
  ...user,
  regnalNumber: toRoman(user.regnalNumber)
});

const convertUserLastName = user => ({
  ...user,
  lastName: user.lastName.toUpperCase()
});

const convertUser = flow([
  convertUserLastName,
  convertUserRegnalNumber
]);

export default self => ({
  get title() {
    return self.user.title;
  },

  get currentUsers() {
    const { user: { userIds }, users } = self;
    return userIds.map(userId => users[userId]);
  },

  get usersList() {
    const { currentUsers } = self;
    return currentUsers.map(convertUser);
  },
});
