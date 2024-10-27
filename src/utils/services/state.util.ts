import { GetItem, TokenIsValid } from '../storage'
import { Payload, State } from '../../services/Auth/auth.types'

export const baseState = { error: false, loading: false }

export const defaultState = {
    ...baseState,
    authentication: false,
    message: '',
    success: false,
    token: '',
    username: '',
    menu: null,
    fullName: '',
}

export const getInitialState = (): State => {
    const data = GetItem({})

    if (!data) return defaultState

    const obj: Payload = JSON.parse(data)

    return { authentication: TokenIsValid(obj.token), ...baseState, ...obj }
}
