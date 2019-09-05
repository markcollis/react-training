import React from 'react'
import { connect } from 'react-redux'
import { withRoute, Link } from 'react-router5'
import { RouteContext } from 'react-router5/types/types'

import { IState } from 'modules/root/root-reducer'
import { createGetUser } from '../users-selectors'
import { User } from '../types';
import { RouteName } from 'modules/root/router/root-route-types';
import { UserRouteName, userIdParam } from '../router/users-route-types';

interface UserDetailStoreProps {
  user?: User
}

type UsersListProps = UserDetailStoreProps

const UserDetail: React.FC<UsersListProps> = ({ user }) => (
  <div>
    <Link routeName={`${RouteName.Users}.${UserRouteName.List}`}>Back</Link>
    {' '}
    {user === undefined
      ? 'Not found'
    : (
      <React.Fragment>
        <span>{user.id}</span>
        {' '}
        <span>{user.firstName}</span>
        {' '}
        <span>{user.lastName}</span>
      </React.Fragment>
    )
  }
  </div>
)

const mapStateToProps = () => {
  const getUser = createGetUser()
  return (state: IState, props: RouteContext): UserDetailStoreProps => ({
    user: getUser(state, props.route.params[userIdParam]),
  })
}

export default withRoute(connect(mapStateToProps)(UserDetail))
