import { Tag } from 'antd'
import { FC } from 'react'

import { useIntl } from './../../../hooks/useIntl'
import { StatusTagProps, StatusMap } from './status.type'
import { State } from '../../../utils/constants/state.enum'

export const StatusTag: FC<StatusTagProps> = ({ status }) => {
  const { formatMessage } = useIntl()

  const statusMap: StatusMap = {
    [State.Active]: { color: 'green', text: formatMessage({ id: 'active' }) },
    [State.Inactive]: { color: 'grey', text: formatMessage({ id: 'inactive' }) },
    [State.Pending]: { color: 'orange', text: formatMessage({ id: 'pending' }) },
  }

  const statusValue = statusMap[status as State] ?? {
    color: 'red',
    text: formatMessage({ id: 'noData' }),
  }

  return <Tag color={statusValue.color}>{statusValue.text}</Tag>
}

export default StatusTag
