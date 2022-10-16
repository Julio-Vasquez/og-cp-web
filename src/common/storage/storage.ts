import jwtDecode from 'jwt-decode'

import { key, payload } from './types'
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

export const IsTokenValid = ({ key = JWT_KEY }: key) => {
    const token: string = jwtDecode(key)
    return ![undefined, null, ''].includes(token)
}

export const CleanData = ({ key = JWT_KEY }) => localStorage.removeItem(key)
