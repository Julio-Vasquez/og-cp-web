import { Badge, Table } from 'antd'

import { RolTag } from '../../../components/Tags/RolTag'
import { DownloaderCSV } from '../../../components/DownloaderCSV/DownloaderCSV'
import { UpgradeOrDegrade } from './components/UpgradeOrDegrade/UpgradeOrDegrade'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useQuery } from '../../../hooks/api'
import { Person, UserList } from './usersList.type'
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

    const { data, loading, refetch } = useQuery<UserList[]>({
        functionFetch: api.user.userList,
    })

    const onCompleted = (): void => {
        successNotification('Update successful')
        refetch()
    }

    const payload =
        data.status === Status.success ? data.payload : ([] as UserList[])
    const mock = [
        {
            user: {
                username: 'johndoe',
                mail: 'johndoe@example.com',
                publicKey: 'abc123',
                state: 'active',
            },
            role: {
                publicKey: 'abc123',
                role: 'admin',
            },
            person: {
                publicKey: 'abc123',
                name: 'John',
                middleName: 'Michael',
                lastNameOne: 'Doe',
                lastNameTwo: 'Smith',
                birthDate: '1990-05-14',
            },
        },
        {
            user: {
                username: 'janesmith',
                mail: 'janesmith@example.com',
                publicKey: 'def456',
                state: 'inactive',
            },
            role: {
                publicKey: 'def456',
                role: 'user',
            },
            person: {
                publicKey: 'def456',
                name: 'Jane',
                middleName: 'Louise',
                lastNameOne: 'Smith',
                lastNameTwo: 'Johnson',
                birthDate: '1985-07-22',
            },
        },
        {
            user: {
                username: 'mikejohnson',
                mail: 'mikejohnson@example.com',
                publicKey: 'ghi789',
                state: 'active',
            },
            role: {
                publicKey: 'ghi789',
                role: 'moderator',
            },
            person: {
                publicKey: 'ghi789',
                name: 'Mike',
                middleName: 'Robert',
                lastNameOne: 'Johnson',
                lastNameTwo: 'Williams',
                birthDate: '1992-03-10',
            },
        },
        {
            user: {
                username: 'emilybrown',
                mail: 'emilybrown@example.com',
                publicKey: 'jkl012',
                state: 'active',
            },
            role: {
                publicKey: 'jkl012',
                role: 'admin',
            },
            person: {
                publicKey: 'jkl012',
                name: 'Emily',
                middleName: 'Anne',
                lastNameOne: 'Brown',
                lastNameTwo: 'Taylor',
                birthDate: '1988-11-18',
            },
        },
        {
            user: {
                username: 'sarahwilson',
                mail: 'sarahwilson@example.com',
                publicKey: 'mno345',
                state: 'pending',
            },
            role: {
                publicKey: 'mno345',
                role: 'user',
            },
            person: {
                publicKey: 'mno345',
                name: 'Sarah',
                middleName: 'Elizabeth',
                lastNameOne: 'Wilson',
                lastNameTwo: 'Davis',
                birthDate: '1995-04-02',
            },
        },
        {
            user: {
                username: 'davidmartin',
                mail: 'davidmartin@example.com',
                publicKey: 'pqr678',
                state: 'inactive',
            },
            role: {
                publicKey: 'pqr678',
                role: 'moderator',
            },
            person: {
                publicKey: 'pqr678',
                name: 'David',
                middleName: 'James',
                lastNameOne: 'Martin',
                lastNameTwo: 'Moore',
                birthDate: '1982-09-30',
            },
        },
        {
            user: {
                username: 'lauragarcia',
                mail: 'lauragarcia@example.com',
                publicKey: 'stu901',
                state: 'active',
            },
            role: {
                publicKey: 'stu901',
                role: 'user',
            },
            person: {
                publicKey: 'stu901',
                name: 'Laura',
                middleName: 'Maria',
                lastNameOne: 'Garcia',
                lastNameTwo: 'Lopez',
                birthDate: '1997-12-15',
            },
        },
        {
            user: {
                username: 'kevinmoore',
                mail: 'kevinmoore@example.com',
                publicKey: 'vwx234',
                state: 'pending',
            },
            role: {
                publicKey: 'vwx234',
                role: 'user',
            },
            person: {
                publicKey: 'vwx234',
                name: 'Kevin',
                middleName: 'Andrew',
                lastNameOne: 'Moore',
                lastNameTwo: 'Martin',
                birthDate: '2000-01-21',
            },
        },
        {
            user: {
                username: 'rachellee',
                mail: 'rachellee@example.com',
                publicKey: 'yz0123',
                state: 'active',
            },
            role: {
                publicKey: 'yz0123',
                role: 'admin',
            },
            person: {
                publicKey: 'yz0123',
                name: 'Rachel',
                middleName: 'Grace',
                lastNameOne: 'Lee',
                lastNameTwo: 'Thomas',
                birthDate: '1993-08-12',
            },
        },
        {
            user: {
                username: 'olivermiller',
                mail: 'olivermiller@example.com',
                publicKey: 'abc567',
                state: 'inactive',
            },
            role: {
                publicKey: 'abc567',
                role: 'moderator',
            },
            person: {
                publicKey: 'abc567',
                name: 'Oliver',
                middleName: 'George',
                lastNameOne: 'Miller',
                lastNameTwo: 'Jackson',
                birthDate: '1991-02-07',
            },
        },
    ]

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
                dataSource={mock}
                loading={loading}
                rowKey={row => row.user.publicKey}
            />
        </div>
    )
}
export default UsersList
