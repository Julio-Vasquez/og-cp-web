import { Query, Mutation } from './core'
import { Methods } from '../utils/types/response.type'
import { LoginType } from '../services/Auth/auth.types'
import { type forgotPassword } from '../views/Public/ForgotPassword/forgotPassword.type'
import { type setPassword } from '../views/Public/SetPassword/setPassword.type'
import { activateAccount } from '../views/Public/ActivateAccount/activateAccount.type'

//listado de endpoints, que se usaran en authService
const login = (body: Object) =>
    Mutation({ method: Methods.post, url: 'auth/login', body })

const signUp = (body: LoginType) =>
    Mutation({ method: Methods.post, url: 'auth/signup', body })

const forgotPassword = (body: forgotPassword) =>
    Mutation({ method: Methods.post, url: 'auth/request-forgot-password', body })

const setPassword = (body: setPassword) =>
    Mutation({ method: Methods.patch, url: 'auth/set-password', body })

const activateAccount = (body: activateAccount) =>
    Mutation({ method: Methods.post, url: 'auth/active-account', body })

export default { login, signUp, forgotPassword, setPassword, activateAccount }
