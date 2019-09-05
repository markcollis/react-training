import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as UsersActions from 'modules/users/users-actions';
import User, { UserShape } from './users-list-item';

const UsersList = ({ users, addUser, removeUser }) => {
  const addAryaStark = () => addUser({ firstName: 'Arya', lastName: 'Stark' });
  const addDaenerysTargaryen = () => addUser({ firstName: 'Daenerys', lastName: 'Targaryen' });

  return (
    <React.Fragment>
      <div>
        <button onClick={addAryaStark}>Add Arya Stark</button>
        <button onClick={addDaenerysTargaryen}>Add Daenerys Targaryen</button>
      </div>
      {users.length === 0
        ? <span>No Users</span>
        : (
          <ul>
            {users.map(user => (
              <li key={user.id}><User user={user} removeUser={removeUser} /></li>
            ))}
          </ul>
        )
      }
    </React.Fragment>
  )
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(UserShape.isRequired).isRequired,
  addUser: PropTypes.func.isRequired,
  removeUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: state.users.users,
});

const mapDispatchToProps = {
  addUser: UsersActions.addUser,
  removeUser: UsersActions.removeUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
