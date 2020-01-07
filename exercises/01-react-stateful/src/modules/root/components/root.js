import React from 'react';
import PropTypes from 'prop-types';

import UsersList from '../../users/components/users-list';
import Header from './header';

const Root = ({ title, users, addUser }) => (
  <div>
    <Header title={title} />
    <UsersList users={users} addUser={addUser} />
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

export default Root;
