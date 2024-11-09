import jwtDecode from 'jwt-decode'

import { Key, Payload, Token } from './storage.types'
import { JWT_KEY } from '../constants/environment.constant'
import { Payload as Storage } from '../../services/Auth/auth.types'

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
    const data = GetItem({})

    if (!data) return ''

    const obj: Storage = JSON.parse(data)

    return obj.token
}

export const GetInfoToken = (currentToken?: string): Token =>
    jwtDecode(currentToken ? currentToken : GetToken())

export const RemoveItem = ({ key = JWT_KEY, type = 'localStorage' }: Key) =>
    type === 'sessionStorage'
        ? sessionStorage.removeItem(key)
        : localStorage.removeItem(key)

export const ValidateToken = (token: string) => {
    const tokenValid: Token = jwtDecode(token)
    return tokenValid && tokenValid?.exp! >= Math.round(new Date().getTime() / 1000)
}

export const TokenIsValid = (token: string) => {
    if (token) {
        const decode: Token = jwtDecode(token) ?? ''
        return decode?.exp! >= Math.round(new Date().getTime() / 1000)
    }
    return false
}

export const ClearData = (key = JWT_KEY) => localStorage.removeItem(key)
