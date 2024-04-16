import { Query } from './core'

const userMe = () => Query({ url: 'user/me' })
const userList = () => Query({ url: 'user/all-admin-users' })

export default { userMe, userList }
