import React from 'react'
import { withRoute } from 'react-router5'
import { RouteContext } from 'react-router5/types/types'

import { RouteName } from 'modules/root/router/root-route-types'
import { UnreachableCaseError } from 'utils/UnreachableCaseError'

import UsersRoute from 'modules/users/components/users-route'

type RootProps = RouteContext

const Root: React.FC<RootProps> = ({ route }) => {
  const routeName = route.name.split('.')[0] as RouteName
  switch (routeName) {
    case RouteName.Users: return <UsersRoute />
    default: throw new UnreachableCaseError(routeName)
  }
}

export default withRoute(Root)
