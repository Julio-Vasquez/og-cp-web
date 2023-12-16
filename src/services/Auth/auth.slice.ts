import { createSlice } from '@reduxjs/toolkit'

import { GetItem, TokenIsValid } from '../../utils/storage'
import { AUTH } from '../../utils/constants/redux.constants'
import { LoginAction, LoginFailedType, LoginSuccessType, State } from './auth.types'

export const initialState: State = {
    authentication: TokenIsValid(), //verification token
    error: false,
    loading: false,
    message: '',
    success: false,
    token: GetItem({}) ?? '', //the token
    user: '',
    menu: null,
}

export const AuthSlice = createSlice({
    name: AUTH,
    initialState,
    reducers: {
        login: (state, { payload }: LoginAction) => ({
            ...state,
            error: false,
            loading: true,
            user: payload.username,
        }),
        loginFailed: (state, { payload }: LoginFailedType) => ({
            ...state,
            error: payload.error,
            success: false,
            loading: false,
            message: payload.message,
            user: '',
        }),
        loginSuccess: (state, { payload }: LoginSuccessType) => ({
            ...state,
            authentication: true,
            error: false,
            loading: false,
            success: payload.success,
            token: payload.token,
            message: payload.message,
            menu: payload.menu,
        }),
        logout: state => ({
            ...state,
            authentication: false,
            error: false,
            loading: false,
            message: '',
            success: false,
            token: '', //the token
            user: '',
            menu: null,
        }),
    },
})

export const { login, loginFailed, loginSuccess, logout } = AuthSlice.actions
export default AuthSlice.reducer
