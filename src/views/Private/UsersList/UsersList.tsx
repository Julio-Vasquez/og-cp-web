import { Badge, Table } from 'antd'

import { RolTag } from '../../../components/Tags/RolTag'
import { DownloaderCSV } from '../../../components/DownloaderCSV/DownloaderCSV'
import { UpgradeOrDegrade } from './components/UpgradeOrDegrade/UpgradeOrDegrade'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useQuery } from '../../../hooks/api'
import { mock } from '../../../utils/mocks/mocks'
import { Person, UserList2 } from './usersList.type'
import { Columns } from '../../../utils/types/table.type'
import { formatDate } from '../../../utils/types/date.util'
import { State } from '../../../utils/constants/state.enum'
import { Status } from '../../../utils/constants/status.enum'
import { colors } from '../../../utils/constants/statusColor.constants'
import { getColumnSearch } from '../../../utils/functions/table/table.function'
import { successNotification } from '../../../utils/notifications/notification.action'

import './UserList.scss'

export const UsersList = () => {
    const { formatMessage } = useIntl()

    const columns: Columns<UserList2> = [
        {
            title: `${formatMessage({ id: 'text.fullName' })}`,
            dataIndex: 'person',
            key: 'person',
            render: ({ publicKey, birthDate, ...values }: Person) =>
                Object.values(values).join(' '),
        },
        {
            title: `${formatMessage({ id: 'text.birthDate' })}`,
            dataIndex: ['person', 'birthDate'],
            key: 'birthDate',
            render: item => formatDate({ date: new Date(item), location: 'es-Es' }),
        },
        {
            title: `${formatMessage({ id: 'text.mail' })}`,
            dataIndex: ['user', 'mail'],
            key: 'mail',
        },
        {
            title: `${formatMessage({ id: 'text.username' })}`,
            dataIndex: ['user', 'username'],
            key: 'username',
            filterSearch: true,
            ...getColumnSearch({ dataIndex: 'username', title: 'username' }),
        },
        {
            title: `${formatMessage({ id: 'text.role' })}`,
            dataIndex: ['role', 'role'],
            key: 'role',
            width: 100,
            render: role => <RolTag value={role} />,
        },
        {
            title: `${formatMessage({ id: 'text.state' })}`,
            dataIndex: ['user', 'state'],
            key: 'state',
            align: 'center',
            render: (state: State) => <Badge status={colors[state]} text={state} />,
        },
        {
            title: `${formatMessage({ id: 'text.action' })}`,
            key: 'actions',
            align: 'center',
            render: (data: UserList2) => {
                return (
                    <UpgradeOrDegrade
                        username={data.user.username}
                        role={data.role.role}
                        onCompleted={onCompleted}
                    />
                )
            },
        },
    ]

    const { data, loading, refetch } = useQuery<UserList2[]>({
        functionFetch: api.user.userList,
    })

    const onCompleted = (): void => {
        successNotification('Update successful')
        refetch()
    }

    const payload =
        data.status === Status.success ? data.payload : ([] as UserList2[])

    return (
        <div className='main-table'>
            <h1 className='main-table__title'>
                {formatMessage({
                    id: 'text.listObj',
                    objVars: { field: formatMessage({ id: 'text.users' }) },
                })}
            </h1>
            <DownloaderCSV data={mock} />
            <Table
                scroll={{ x: 100 }}
                className='main-table__table'
                columns={columns}
                pagination={{ pageSize: 10 }}
                dataSource={payload}
                loading={loading}
                rowKey={row => row.user.publicKey}
            />
        </div>
    )
}
export default UsersList
