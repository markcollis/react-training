import React from 'react';
import PropTypes from 'prop-types';

import { UsersList } from '../../users/components/users-list';
import { UsersListHooks } from '../../users/components/users-list-hooks';
import { Header } from './header';
import { HeaderComponent } from './header-component';
import { HeaderPureComponent } from './header-purecomponent';

export const Root = ({ title, users, addUser }) => (
  <div>
    <Header title={title} />
    <UsersList users={users} addUser={addUser} />
    <hr />
    <Header title="Functional component using hooks" />
    <UsersListHooks />
    <hr />
    <HeaderComponent title="Header (class extending Component)" />
    <HeaderPureComponent title="Header (class extending PureComponent)" />
    <Header title="Header (functional component)" />
  </div>
);

Root.propTypes = {
  title: String.isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  })),
  addUser: PropTypes.func.isRequired,
};
