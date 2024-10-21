export type User = {
  email: string
  password: string
}

export type UserLoginResponse = {
  token: string
  email: string
}
