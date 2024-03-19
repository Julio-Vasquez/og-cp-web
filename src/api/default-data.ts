import { Query } from './core'

const userMe = () => Query({ url: 'user/me' })

const availableData = () => Query({ url: 'default-data/available-data' })



export default { availableData, userMe }
