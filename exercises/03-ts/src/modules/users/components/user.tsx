import React from 'react'

import { User as UserType, UserId } from '../types'

export interface UserProps {
  user: UserType
  removeUser: (id: UserId) => unknown
}

class User extends React.PureComponent<UserProps> {
  render() {
    const { user } = this.props
    return (
      <React.Fragment>
        <span>{user.firstName} {user.lastName}</span>
        <button onClick={this.removeUser}>x</button>
      </React.Fragment>
    )
  }

  removeUser = () => {
    const { user, removeUser } = this.props
    removeUser(user.id)
  }
}

export default User
