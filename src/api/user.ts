import { Query } from './core'

const userMe = () => Query({ url: 'user/me' })

export default { userMe }
