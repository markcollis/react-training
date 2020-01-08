import React from 'react';

import { UsersList } from '../../users/components/users-list';

import { Header } from './header';

export const Root = () => (
  <div>
    <Header />
    <UsersList />
  </div>
);
