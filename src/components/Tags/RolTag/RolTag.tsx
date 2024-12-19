import { Tag } from 'antd'
import { FC } from 'react'

import useIntl from '../../../hooks/useIntl'
import { ROLES_COLOR } from '../../../utils/constants/roles.constants'
import { RolDefaultPropTypes, RolPropTypes, type RolProps } from './rolTag.type'

export const RolTag: FC<RolProps> = ({ value, id }) => {
  const { formatMessage } = useIntl()

  const rolColor = ROLES_COLOR[value! ?? formatMessage({ id: 'text.user' })]

  return (
    <Tag id={id!} color={rolColor}>
      {value}
    </Tag>
  )
}

RolTag.propTypes = RolPropTypes
RolTag.defaultProps = RolDefaultPropTypes

export default RolTag
