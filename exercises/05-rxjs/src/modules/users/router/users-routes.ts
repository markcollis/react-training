import { Route } from 'router5'

import { UserRouteName, userIdParam } from './users-route-types'

export const usersRoutes: Route[] = [
  {
    name: UserRouteName.List,
    path: '/',
  },
  {
    name: UserRouteName.Detail,
    path: `/:${userIdParam}/`,
  },
]
