import { Table } from 'antd'

import { DownloaderCSV } from '../../../components/DownloaderCSV/DownloaderCSV'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import useData from '../../../hooks/useData'
import { useQuery } from '../../../hooks/api'
import type { UserList } from './usersList.type'
import { GetInfoToken } from '../../../utils/storage/storage'
import { Status } from '../../../utils/constants/status.enum'
import { AUTH } from '../../../utils/constants/redux.constants'
import { successNotification } from '../../../utils/notifications/notification.action'

import { ColumnsTable } from './components/TableColumns'

import './UserList.scss'

export const UsersList = () => {
  const { formatMessage } = useIntl()
  const { token } = useData({ reducer: AUTH })
  const { role } = GetInfoToken(token)

  const { data, loading, refetch } = useQuery<UserList[]>({
    functionFetch: api.user.userList,
  })

  const onCompleted = (): void => {
    successNotification(formatMessage({ id: 'text.updateSuccessful' }))
    refetch()
  }

  const payload = data.status === Status.success ? data.payload : ([] as UserList[])

  const prepareData = payload.map(({ person, role, user }) => ({
    ...user,
    ...role,
    ...person,
  }))

  console.log(prepareData)

  const title = formatMessage({
    id: 'text.listObj',
    objVars: { field: formatMessage({ id: 'text.users' }) },
  })

  const tableColumns = ColumnsTable({ role, onCompleted })

  return (
    <div className='main-table'>
      <h1 className='main-table__title'>{title}</h1>
      <DownloaderCSV data={prepareData} />
      <Table
        scroll={{ x: 100 }}
        className='main-table__table'
        columns={tableColumns}
        pagination={{ pageSize: 10 }}
        dataSource={prepareData}
        loading={loading}
        rowKey={row => row.publicKey}
      />
    </div>
  )
}
export default UsersList
