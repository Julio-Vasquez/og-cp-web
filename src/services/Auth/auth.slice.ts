import { createSlice } from '@reduxjs/toolkit'

import { AUTH } from '../../utils/constants/redux.constants'
import { ValidateToken, GetToken } from '../../utils/storage'
import type {
    LoginAction,
    LoginFailedType,
    LoginSuccessType,
    State,
} from './auth.types'
import { getData } from '../../utils/storage/storage'

export const initialState: State = {
    error: false,
    loading: false,
    authentication: ValidateToken(GetToken()),
    message: '',
    success: false,
    token: '',
    username: '',
    menu: getData().menu,
    fullName: '',
}

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
            error: false,
            loading: false,
        }),
        logout: state => ({ ...state, ...initialState }),
    },
})

export const { login, loginFailed, loginSuccess, logout } = AuthSlice.actions
export default AuthSlice.reducer
