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

  get decoratedUsersList() {
    const { usersList } = self;
    return usersList.map(convertUser);
  },

  get decoratedUserDetail() {
    const { userDetail } = self;
    return userDetail && convertUserRegnalNumber(userDetail);
  }
});
