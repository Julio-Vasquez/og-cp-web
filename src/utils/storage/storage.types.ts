export type Key = {
  key?: string
  type?: 'sessionStorage' | 'localStorage'
}

export type Payload<T> = {
  newItem: T
} & Key

export type Token = {
  iat: number
  exp: number
  publicKey: string
  username: string
  mail: string
  role: string
}
