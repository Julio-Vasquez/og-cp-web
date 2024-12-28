import { Tag } from 'antd'
import { FC } from 'react'

import useIntl from '../../../hooks/useIntl'
import { type RolProps } from './rolTag.type'
import { ROLES_COLOR } from '../../../utils/constants/roles.constants'

export const RolTag: FC<RolProps> = ({ value }) => {
  const { formatMessage } = useIntl()

  const rolColor = ROLES_COLOR[value ?? formatMessage({ id: 'text.user' })]

  return <Tag color={rolColor}>{value}</Tag>
}

export default RolTag
