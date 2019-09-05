import React from 'react'
import { Link } from 'react-router5'

import { User, UserId } from '../types'
import { RouteName } from 'modules/root/router/root-route-types';
import { UserRouteName, userIdParam } from '../router/users-route-types';

export interface UserListItemProps {
  user: User
  removeUser: (id: UserId) => unknown
}

class UserListItem extends React.PureComponent<UserListItemProps> {
  render() {
    const { user } = this.props
    return (
      <React.Fragment>
        <Link routeName={`${RouteName.Users}.${UserRouteName.Detail}`} routeParams={{ [userIdParam]: user.id }}>
          {user.firstName} {user.lastName}
        </Link>
        <button onClick={this.removeUser}>x</button>
      </React.Fragment>
    )
  }

  removeUser = () => {
    const { user, removeUser } = this.props
    removeUser(user.id)
  }
}

export default UserListItem
