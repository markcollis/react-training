import React from 'react';
import PropTypes from 'prop-types';
import { endsWithSegment } from 'router5-helpers';
import { routeNode } from 'react-mobx-router5';

import UsersList from 'modules/users/components/users-list';
import UserDetail from 'modules/users/components/user-detail';

/**
 * Route component which is mount onto /users prefix
 * so it automatically deals with routing of the module.
 * It renders detail or list and allow rendering user creation
 * form on top of list (as a modal transported into document.body using portal)
 */
const UsersRoute = ({ route: { name } }) => {
  const endsWith = endsWithSegment(name);

  if (endsWith('detail')) {
    return <UserDetail />;
  } else {
    return <UsersList />;
  }
};

UsersRoute.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired
};

export default routeNode('users')(UsersRoute);
