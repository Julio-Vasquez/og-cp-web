import { useState } from 'react'
import { Badge, Table } from 'antd'

import { RolTag } from '../../../components/Tags/RolTag'
import { UpgradeOrDegrade } from './components/UpgradeOrDegrade/UpgradeOrDegrade'

import api from '../../../api'
import { useQuery } from '../../../hooks/api'
import { Person, UserList } from './usersList.type'
import { formatDate } from '../../../utils/types/date.util'
import { State } from '../../../utils/constants/state.enum'
import { Status } from '../../../utils/constants/status.enum'
import { Columns, TablePaginationPosition } from '../../../utils/types/table.type'
import { successNotification } from '../../../utils/notifications/notification.action'
import { getColumnSearch } from '../../../utils/functions/table/table.function'

type Stated = 'success' | 'error' | 'processing'

const colors: Record<State, Stated> = {
    Activo: 'success',
    Inactivo: 'error',
    Pendiente: 'processing',
}

export const UsersList = () => {
    const columns: Columns<UserList> = [
        {
            title: 'Nombres y Apellidos',
            dataIndex: 'person',
            key: 'person',
            render: ({ publicKey, birthDate, ...values }: Person) =>
                Object.values(values).join(' '),
        },
        {
            title: 'Fecha de nacimiento',
            dataIndex: ['person', 'birthDate'],
            key: 'birthDate',
            render: item => formatDate({ date: new Date(item), location: 'es-Es' }),
        },
        {
            title: 'Correo Electrónico',
            dataIndex: ['user', 'mail'],
            key: 'mail',
        },
        {
            title: 'Usuario',
            dataIndex: ['user', 'username'],
            key: 'username',
            ...getColumnSearch({ dataIndex: 'username', title: 'username' }),
        },
        {
            title: 'Role',
            dataIndex: ['role', 'role'],
            key: 'role',
            render: role => <RolTag value={role} />,
        },

        {
            title: 'State',
            dataIndex: ['user', 'state'],
            key: 'state',
            render: (state: State) => <Badge status={colors[state]} text={state} />,
        },
        {
            title: 'Actions',
            key: 'actions',
            fixed: 'right',
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
        <div>
            <h1>Lista de Usuarios</h1>
            <Table
                columns={columns}
                pagination={{ position: [page] }}
                dataSource={payload}
                loading={loading}
            />
        </div>
    )
}
export default UsersList
