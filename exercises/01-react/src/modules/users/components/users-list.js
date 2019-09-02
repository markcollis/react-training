import React from 'react';
import PropTypes from 'prop-types';

import User, { UserShape } from './user';

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

export default UsersList;
