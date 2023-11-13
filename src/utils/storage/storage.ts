import jwtDecode from 'jwt-decode'

import { key, payload, Token } from './storage.types'
import { JWT_KEY } from '../constants/environment.constant'

export const SaveItem = ({
    key = JWT_KEY,
    newItem,
    type = 'localStorage',
}: payload) =>
    type === 'sessionStorage'
        ? sessionStorage.setItem(key, newItem)
        : localStorage.setItem(key, newItem)

export const GetItem = ({ key = JWT_KEY }: key) => localStorage.getItem(key)

export const RemoveItem = ({ key = JWT_KEY, type = 'localStorage' }: payload) =>
    type === 'sessionStorage'
        ? sessionStorage.removeItem(key)
        : localStorage.removeItem(key)

export const ValidateToken = (token: string) => {
    const tokenValid: Token = jwtDecode(token)
    return tokenValid && tokenValid?.exp >= Math.round(new Date().getTime() / 1000)
}

export const TokenIsValid = () => {
    const token = GetItem({})
    if (token) {
        const decode: Token = jwtDecode(token) ?? ''
        return decode?.exp >= Math.round(new Date().getTime() / 1000)
    }
    return false
}

export const ClearData = (key = JWT_KEY) => localStorage.removeItem(key)
