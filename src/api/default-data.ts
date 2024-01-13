import { Query } from './core'

const availableData = () => Query({ url: 'default-data/available-data' })

const userMe = () => Query({ url: 'user/me' })

export default { availableData, userMe }
