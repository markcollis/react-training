import * as React from 'react';
// import * as PropTypes from 'prop-types';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../root/root-reducer';
import UsersActions from '../users-actions';

type UsersListProps = ConnectedProps<typeof connector>
const UsersList = ({ users, addUser }: UsersListProps) => (
  <div>
    <div>
      <button onClick={() => addUser({ firstName: 'Arya', lastName: 'Stark' })}>Add No One</button>
      <button onClick={() => addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })}>Add Mother of Dragons</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {!users.length && (
          <tr>
            <td colSpan={2}>No Users</td>
          </tr>
        )}
        {users.map(({ id, firstName, lastName }) => (
          <tr key={id}>
            <td>{firstName}</td>
            <td>{lastName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state: RootState) => ({
  users: state.users.users
});

const mapDispatchToProps = {
  addUser: UsersActions.Creators.addUser
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(UsersList);
