import { FC } from 'react'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import useIntl from '../../../hooks/useIntl'
import { UploadButtonProps } from './UploadButton.type'

export const UploadButton: FC<UploadButtonProps> = ({ loading }) => {
    const { formatMessage } = useIntl()

    return (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>
                {formatMessage({ id: 'text.upload' })}
            </div>
        </div>
    )
}

export default UploadButton
