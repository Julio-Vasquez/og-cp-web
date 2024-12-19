import { Tag } from 'antd'

import { useIntl } from './../../../hooks/useIntl'
import { State } from '../../../utils/constants/state.enum'
import { StatusTagProps, StatusTagPropTypes } from './status.type'
import { FC } from 'react'

export const StatusTag: FC<StatusTagProps> = ({ status }) => {
  const { formatMessage } = useIntl()

  const statusMap: Record<State, { color: string; text: string }> = {
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

StatusTag.propTypes = StatusTagPropTypes

export default StatusTag
