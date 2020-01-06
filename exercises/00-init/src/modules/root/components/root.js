import React from 'react';
import { Header } from './Header';
import { UsersList } from './UsersList';

const Root = () => (
  <div>
    <Header title="User Management" />
    <UsersList />
  </div>
);

export default Root;
