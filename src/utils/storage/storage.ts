import { jwtDecode } from 'jwt-decode'

import { Key, Payload, Token } from './storage.types'
import { JWT_KEY } from '../constants/environment.constant'
import type { Payload as Data } from '../../services/Auth/auth.type'

export const SaveItem = <T = unknown>({
  key = JWT_KEY,
  newItem,
  type = 'localStorage',
}: Payload<T>): void => {
  type === 'sessionStorage'
    ? sessionStorage.setItem(key, JSON.stringify(newItem))
    : localStorage.setItem(key, JSON.stringify(newItem))
}

export const GetItem = ({ key = JWT_KEY }: Key) => localStorage.getItem(key)

export const GetToken = (): string => {
  const data = GetItem({ key: JWT_KEY })

  if (!data) return ''

  const { token } = JSON.parse(data)

  return token
}

export const getData = (): Data => {
  const data = GetItem({ key: JWT_KEY })

  if (!data) return {} as Data

  const values = JSON.parse(data) as Data

  return { ...values }
}

export const GetInfoToken = (currentToken?: string): Token =>
  jwtDecode(currentToken ? currentToken : GetToken())

export const RemoveItem = ({ key = JWT_KEY, type = 'localStorage' }: Key) =>
  type === 'sessionStorage'
    ? sessionStorage.removeItem(key)
    : localStorage.removeItem(key)

export const ValidateToken = (token: string) => {
  try {
    const tokenValid: Token = jwtDecode(token)

    return tokenValid && tokenValid?.exp! >= Math.round(new Date().getTime() / 1000)
  } catch (e) {
    return false
  }
}

export const ClearData = (key = JWT_KEY) => localStorage.removeItem(key)
