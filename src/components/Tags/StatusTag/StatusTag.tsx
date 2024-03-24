import { Tag } from 'antd'

import { STATUS } from './status.mock'
import { useIntl } from './../../../hooks/useIntl'
import {
    StatusTagPropTypes,
    StatusTagProps,
    DefaultStatusTagPropTypes,
} from './status.type'

const StatusTag = ({ status }: StatusTagProps) => {
    const { formatMessage } = useIntl()

    const statusValue = STATUS.find(ele => ele.text === status) ?? {
        color: 'red',
        text: formatMessage({ id: 'noData' }),
    }

    return <Tag color={statusValue.color}>{statusValue.text}</Tag>
}

StatusTag.defaultProps = DefaultStatusTagPropTypes

StatusTag.propTypes = StatusTagPropTypes

export default StatusTag
