import { InputProps, Tag } from 'antd'

import { ROL } from './RolTag.type'
import { FC } from 'react'
import useIntl from '../../../hooks/useIntl'
import { formTranslate } from '../../../utils/functions/translation.function'

const ROLES_COLOR: Record<ROL, string> = {
    Administrador: '#87d068',
    Terapeuta: '#f50',
    Usuario: '#2db7f5',
}

export const RolTag: FC<InputProps> = ({ value, id }) => {
    const { formatMessage } = useIntl()

    return (
        <Tag
            id={id}
            color={
                ROLES_COLOR[
                    (value?.toString() as ROL) ?? formatMessage({ id: 'text.user' })
                ]
            }
        >
            {value}
        </Tag>
    )
}

export default RolTag
