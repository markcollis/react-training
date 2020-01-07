import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import Root from 'modules/root/components/root';

let state = {
  title: 'User Management Exercise #2',
  users: [],
};

const addUser = user => {
  state = ({
    ...state,
    users: [
      ...state.users,
      {
        id: state.users.length + 1,
        ...user
      },
    ],
  });
  render();
};

const render = () => {
  const { title, users } = state;
  ReactDOM.render(
    <Root
      title={title}
      users={users}
      addUser={addUser}
    />,
    document.getElementById('root')
  );
};

render();
