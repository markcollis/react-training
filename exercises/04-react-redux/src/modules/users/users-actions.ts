import { createActions } from 'reduxsauce';

const actions = createActions(
  {
    addUser: ['user']
  },
  { prefix: 'users/' }
);

export default actions;
