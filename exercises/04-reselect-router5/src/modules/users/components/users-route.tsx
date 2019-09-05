import React from 'react'
import { withRoute } from 'react-router5'
import { RouteContext } from 'react-router5/types/types'

import { UserRouteName } from 'modules/users/router/users-route-types'
import { UnreachableCaseError } from 'utils/UnreachableCaseError'

import Header from './header'
import UsersList from './users-list'
import UserDetail from './user-detail'

const getChildComponent = ({ route }: RouteContext) => {
  const routeName = route.name.split('.')[1] as UserRouteName
  switch (routeName) {
    case UserRouteName.List: return <UsersList />
    case UserRouteName.Detail: return <UserDetail />
    default: throw new UnreachableCaseError(routeName)
  }
}

type UsersRouteProps = RouteContext

const UsersRoute: React.FC<UsersRouteProps> = (props) => (
  <div>
    <Header />
    {getChildComponent(props)}
  </div>
)

export default withRoute(UsersRoute)
