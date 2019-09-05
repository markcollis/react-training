export type UserId = number

export interface UserWithoutId {
  firstName: string
  lastName: string
}

export interface User extends UserWithoutId {
  id: UserId
}
