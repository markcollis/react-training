import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  addUser: ['payload'],
}, {
  prefix: 'users/',
});

export default { Types, Creators };

// original without reduxsauce below

// const ADD_USER = 'ADD_USER';

// const addUser = user => ({ type: ADD_USER, payload: user });

// export default {
//   Types: {
//     ADD_USER
//   },
//   Creators: {
//     addUser
//   }
// };
