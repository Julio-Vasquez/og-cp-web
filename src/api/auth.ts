import { Query, Mutation } from './core'
import { Methods } from '../utils/api/api.util'
import { loginType } from '../services/Auth/auth.types'

//listado de endpoints, que se usaran en authService
const login = (body: Object) =>
    Mutation({ method: Methods.post, url: 'auth/login', body })

const signUp = (body: loginType) =>
    Mutation({ method: Methods.post, url: 'auth/signup', body })
export default { login, signUp }
