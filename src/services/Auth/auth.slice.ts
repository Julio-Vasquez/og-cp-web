import { createSlice } from '@reduxjs/toolkit'

import { AUTH } from '../../utils/constants/redux.constants'
import {
    baseState,
    defaultState,
    getInitialState,
} from '../../utils/services/state.util'
import { LoginAction, LoginFailedType, LoginSuccessType } from './auth.types'

export const initialState = getInitialState()

export const AuthSlice = createSlice({
    name: AUTH,
    initialState,
    reducers: {
        login: (state, _: LoginAction) => ({
            ...state,
            error: false,
            loading: true,
        }),
        loginFailed: (state, { payload }: LoginFailedType) => ({
            ...state,
            error: payload.error,
            success: false,
            loading: false,
            message: payload.message,
            username: '',
        }),
        loginSuccess: (state, { payload }: LoginSuccessType) => ({
            ...state,
            authentication: true,
            success: payload.success,
            token: payload.token,
            message: payload.message,
            menu: payload.menu,
            fullName: payload.fullName,
            username: payload.username,
            ...baseState,
        }),
        logout: state => ({ ...state, ...defaultState }),
    },
})

export const { login, loginFailed, loginSuccess, logout } = AuthSlice.actions
export default AuthSlice.reducer
