import { Query, Mutation } from './core'
import { Methods } from '../utils/types/response.type'
import { LoginType } from '../services/Auth/auth.types'
import { activateAccount } from '../views/Public/ActivateAccount/activateAccount.type'
import { type SetPasswordMutation } from '../views/Public/SetPassword/setPassword.type'
import { type ForgotPassword } from '../views/Public/ForgotPassword/forgotPassword.type'

//listado de endpoints, que se usaran en authService
const login = (body: LoginType, device: string) =>
    Mutation({ method: Methods.post, url: 'auth/login', body: { ...body, device } })

const signUp = (body: LoginType) =>
    Mutation({ method: Methods.post, url: 'auth/signup', body })

const forgotPassword = (body: ForgotPassword) =>
    Mutation({ method: Methods.post, url: 'auth/request-forgot-password', body })

const setPassword = (body: SetPasswordMutation) =>
    Mutation({ method: Methods.patch, url: 'auth/set-password', body })

const activateAccount = (body: activateAccount) =>
    Mutation({ method: Methods.post, url: 'auth/active-account', body })

export default { login, signUp, forgotPassword, setPassword, activateAccount }
