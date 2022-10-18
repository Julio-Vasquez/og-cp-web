import { Tag } from 'antd'

import {
    StatusTagPropTypes,
    StatusTagProps,
    DefaultStatusTagPropTypes,
} from './status.type'

const STATUS = {
    active: { text: '', key: '1', color: '' },
    inactive: { text: '', key: '2', color: '' },
    pending: { text: '', key: '3', color: '' },
}

const StatusTag = ({ status }: StatusTagProps) => {
    const statusValue = STATUS[status]

    return !!statusValue ? (
        <Tag color={statusValue.color}>{statusValue.text}</Tag>
    ) : (
        <Tag color='red'>No Defined</Tag>
    )
}

StatusTag.defaultProps = DefaultStatusTagPropTypes

StatusTag.propTypes = StatusTagPropTypes

export default StatusTag
