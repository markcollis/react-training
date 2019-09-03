import React from 'react'
import { connect } from 'react-redux'

import { Actions } from 'modules/root/root-actions'
import { User as UserType } from '../types'

import User from './user'
import { IState } from 'modules/root/root-reducer'

interface UsersListStoreProps {
  users: UserType[]
}

interface UsersListDispatchProps {
  addUser: typeof Actions.Users.addUser
  removeUser: typeof  Actions.Users.removeUser
}

type UsersListProps = UsersListStoreProps & UsersListDispatchProps

const UsersList: React.FC<UsersListProps> = ({ users, addUser, removeUser }) => {
  const addAryaStark = () => addUser({ firstName: 'Arya', lastName: 'Stark' })
  const addDaenerysTargaryen = () => addUser({ firstName: 'Daenerys', lastName: 'Targaryen' })

  return (
    <React.Fragment>
      <div>
        <button onClick={addAryaStark}>Add Arya Stark</button>
        <button onClick={addDaenerysTargaryen}>Add Daenerys Targaryen</button>
      </div>
      {users.length === 0
        ? <span>No Users</span>
        : (
          <ul>
            {users.map(user => (
              <li key={user.id}><User user={user} removeUser={removeUser} /></li>
            ))}
          </ul>
        )
      }
    </React.Fragment>
  )
}

const mapStateToProps = (state: IState): UsersListStoreProps => ({
  users: state.users.users,
})

const mapDispatchToProps = {
  addUser: Actions.Users.addUser,
  removeUser: Actions.Users.removeUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)
