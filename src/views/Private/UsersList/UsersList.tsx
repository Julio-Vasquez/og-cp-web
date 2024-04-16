import { useState } from 'react'
import { Badge, Space, Table, Button } from 'antd'

import api from '../../../api'
import { useQuery } from '../../../hooks/api'
import { Person, UserList } from './usersList.type'
import { formatDate } from '../../../utils/types/date.util'
import { Status } from '../../../utils/constants/status.enum'
import { Columns, TablePaginationPosition } from '../../../utils/types/table.type'

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
    },
    {
        title: 'Role',
        dataIndex: ['role', 'role'],
        key: 'role',
    },

    {
        title: 'State',
        dataIndex: ['user', 'state'],
        key: 'state',
        render: (_, record) => <Badge status='success' text='Activo' />,
    },
    {
        title: 'Actions',
        key: 'actions',
        fixed: 'right',
        width: 200,
        align: 'center',
        render: (_, record) => (
            <Space>
                <Button>Upgrade</Button>
                <Button>Degrade</Button>
            </Space>
        ),
    },
]

export const UsersList = () => {
    const [page, setPage] = useState<TablePaginationPosition>('bottomCenter')

    const { data, loading } = useQuery<UserList[]>({
        functionFetch: api.user.userList,
    })

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
