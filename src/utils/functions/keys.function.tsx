import { UserList } from '../../views/Private/UsersList/usersList.type'

type props = {
  id: string
  objVars?: Object
}

export const translateDatas = (
  data: UserList[],
  formatMessage: ({ id, objVars }: props) => string
) =>
  data.map((item: any) => {
    if ('person' in item) {
      const { person, role, user } = item
      const { publicKey, birthDate, ...values } = person
      return {
        [formatMessage({ id: 'text.fullName' })]: Object.values(values).join(' '),
        [formatMessage({ id: 'text.birthDate' })]: birthDate,
        [formatMessage({ id: 'text.mail' })]: user.mail,
        [formatMessage({ id: 'text.username' })]: user.username,
        [formatMessage({ id: 'text.role' })]: role.role,
        [formatMessage({ id: 'text.state' })]: user.state,
      }
    }
    return {}
  })
