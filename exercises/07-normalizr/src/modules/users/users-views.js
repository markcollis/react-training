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
  get usersList() {
    return self.user.users.map(convertUser);
  },
});
