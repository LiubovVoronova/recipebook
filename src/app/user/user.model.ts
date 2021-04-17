export interface User {
  id: number,
  firstName: string,
  lastName: string,
  email: string
}

export interface AuthResponseData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken:	string,
  expiresIn: string,
  localId: string
}
