import { Route } from 'router5'

import { RouteName } from './root-route-types'
import { usersRoutes } from 'modules/users/router/users-routes'
import { UserRouteName } from 'modules/users/router/users-route-types';

export const routes: Route[] = [
  {
    name: RouteName.Users,
    path: '/users',
    children: usersRoutes,
    forwardTo: `${RouteName.Users}.${UserRouteName.List}`
    ,
  },
]

export const defaultRoute = RouteName.Users
