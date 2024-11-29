import { FC } from 'react'
import { InputProps, Tag } from 'antd'

import useIntl from '../../../hooks/useIntl'
import { ROL } from '../../../utils/types/roles.type'
import { ROLES_COLOR } from '../../../utils/constants/roles.constants'

export const RolTag: FC<InputProps> = ({ value, id }) => {
    const { formatMessage } = useIntl()

    const rolColor =
        ROLES_COLOR[(value?.toString() as ROL) ?? formatMessage({ id: 'text.user' })]

    return (
        <Tag id={id} color={rolColor}>
            {value}
        </Tag>
    )
}

export default RolTag
