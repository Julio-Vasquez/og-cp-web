import { Badge } from 'antd'

import { RolTag } from '../../../../components/Tags/RolTag'
import UpgradeOrDegrade from './UpgradeOrDegrade'

import useIntl from '../../../../hooks/useIntl'
import { isAdmin } from '../../../../utils/role.util'
import type { UserListFull } from '../usersList.type'
import { formatDate } from '../../../../utils/types/date.util'
import { State } from '../../../../utils/constants/state.enum'
import type { Columns } from '../../../../utils/types/table.type'
import { COLORS } from '../../../../utils/constants/statusColor.constants'
import { getColumnSearch } from '../../../../utils/functions/table/table.function'

type Props = {
  onCompleted: () => void
  role: string
}

export const ColumnsTable = ({
  onCompleted,
  role,
}: Props): Columns<UserListFull> => {
  const { formatMessage } = useIntl()

  const hasRender = isAdmin(role)
    ? {
        title: `${formatMessage({ id: 'text.action' })}`,
        key: 'actions',
        align: 'center' as 'center',
        render: (data: UserListFull) => (
          <UpgradeOrDegrade
            username={data.username}
            role={data.role}
            onCompleted={onCompleted}
          />
        ),
      }
    : {}

  const columns: Columns<UserListFull> = [
    {
      title: `${formatMessage({ id: 'text.fullName' })}`,
      key: 'person',
      render: ({ name, middleName, lastNameOne, lastNameTwo }: UserListFull) => {
        return [name, middleName, lastNameOne, lastNameTwo].filter(Boolean).join(' ')
      },
    },
    {
      title: `${formatMessage({ id: 'text.birthDate' })}`,
      dataIndex: 'birthDate',
      key: 'birthDate',
      render: item => formatDate({ date: new Date(item), location: 'es-Es' }),
    },
    {
      title: `${formatMessage({ id: 'text.mail' })}`,
      dataIndex: 'mail',
      key: 'mail',
    },
    {
      title: `${formatMessage({ id: 'text.username' })}`,
      dataIndex: 'username',
      key: 'username',
      filterSearch: true,
      ...getColumnSearch({ dataIndex: 'username', title: 'username' }),
    },
    {
      title: `${formatMessage({ id: 'text.role' })}`,
      dataIndex: 'role',
      key: 'role',
      width: 100,
      render: role => <RolTag value={role} />,
    },
    {
      title: `${formatMessage({ id: 'text.state' })}`,
      dataIndex: 'state',
      key: 'state',
      align: 'center',
      render: (state: State) => <Badge status={COLORS[state]} text={state} />,
    },
    hasRender,
  ]

  return columns
}
