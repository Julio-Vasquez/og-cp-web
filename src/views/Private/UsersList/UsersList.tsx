import { useState } from 'react'
import { Badge, Table } from 'antd'

import { RolTag } from '../../../components/Tags/RolTag'
import { UpgradeOrDegrade } from './components/UpgradeOrDegrade/UpgradeOrDegrade'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useQuery } from '../../../hooks/api'
import type { UserState } from './usersList.type'
import { Person, UserList } from './usersList.type'
import { formatDate } from '../../../utils/types/date.util'
import { State } from '../../../utils/constants/state.enum'
import { Status } from '../../../utils/constants/status.enum'
import { getColumnSearch } from '../../../utils/functions/table/table.function'
import { Columns, TablePaginationPosition } from '../../../utils/types/table.type'
import { successNotification } from '../../../utils/notifications/notification.action'

export const UsersList = () => {
    const { formatMessage } = useIntl()
    const colors: Record<State, UserState> = {
        Activo: 'success',
        Inactivo: 'error',
        Pendiente: 'processing',
    }
    const columns: Columns<UserList> = [
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
            onFilterDropdownOpenChange(visible) {},
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
            render: (state: State) => <Badge status={colors[state]} text={state} />,
        },
        {
            title: `${formatMessage({ id: 'text.action' })}`,
            key: 'actions',

            width: 200,
            align: 'center',
            render: (data: UserList) => {
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

    const [page, setPage] = useState<TablePaginationPosition>('bottomCenter')

    const { data, loading, refetch } = useQuery<UserList[]>({
        functionFetch: api.user.userList,
    })

    const onCompleted = (): void => {
        successNotification('Update successful')
        refetch()
    }

    const payload =
        data.status === Status.success ? data.payload : ([] as UserList[])

    return (
        <div className='main-table'>
            <h1>Lista de Usuarios</h1>
            <Table
                className='main-table__table'
                columns={columns}
                pagination={{ position: [page] }}
                dataSource={payload}
                loading={loading}
            />
        </div>
    )
}
export default UsersList
