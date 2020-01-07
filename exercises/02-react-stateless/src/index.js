import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Root } from 'modules/root/components/root';
import { rootReducer } from 'modules/root/root-reducer';
import { usersActions } from 'modules/users/users-actions';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : v => v,
);

const dispatchAddUser = user => store.dispatch(usersActions.Creators.addUser(user));

const render = () => {
  const { usersReducer } = store.getState();
  const { title, users } = usersReducer;
  ReactDOM.render(
    <Root
      title={title}
      users={users}
      addUser={dispatchAddUser}
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);

render();
