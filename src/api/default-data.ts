import { Query } from './core'

const availableDataUsers = () => Query({ url: 'default-data/available-data-users' })

const availableDataPlayers = () =>
  Query({ url: 'default-data/available-data-players' })

export default { availableDataUsers, availableDataPlayers }
