import { Button, Tooltip } from 'antd'
import { FilePdfFilled } from '@ant-design/icons'

import { useIntl } from '../../../hooks/useIntl'

const DownloadPdf = () => {
    const { formatMessage } = useIntl()
    return (
        <div>
            <Tooltip title={formatMessage({ id: 'downloadPdfTooltip' })}>
                <Button type='primary' shape='round' icon={<FilePdfFilled />}>
                    {formatMessage({ id: 'downloaderPdf' })}
                </Button>
            </Tooltip>
        </div>
    )
}

export default DownloadPdf
