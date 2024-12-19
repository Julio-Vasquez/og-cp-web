import { FC } from 'react'
import { Button } from 'antd'
import jsonToCsvExport from 'json-to-csv-export'

import useIntl from '../../hooks/useIntl'
import { type Csv } from './Downloader.type'

import './Downloader.scss'

export const DownloaderCSV: FC<Csv> = ({ data }) => {
  const { formatMessage } = useIntl()

  const headers = data.length > 0 ? Object.keys(data[0] as any) : []

  const handleClickDownload = () => jsonToCsvExport({ data, headers })

  return (
    <div className='main-csv'>
      <Button className='main-csv__btn' onClick={handleClickDownload}>
        {formatMessage({ id: 'text.downloader', objVars: { field: 'CSV' } })}
      </Button>
    </div>
  )
}

export default DownloaderCSV
