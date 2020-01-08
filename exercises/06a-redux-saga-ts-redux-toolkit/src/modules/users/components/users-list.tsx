import * as React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { RootState } from '../../root/root-reducer';
import { addUser } from '../users-slice';
import { getUsersList } from '../users-selectors';

type UsersListProps = ConnectedProps<typeof connector>
const UsersListInner = ({ users, addUser }: UsersListProps) => (
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
  users: getUsersList(state),
});

const mapDispatchToProps = {
  addUser
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export const UsersList = connector(UsersListInner);
