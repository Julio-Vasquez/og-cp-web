import { FC } from 'react'
import { Button } from 'antd'
import CsvDownload from 'react-csv-downloader'

import useIntl from '../../hooks/useIntl'
import { Csv } from './Downloader.type'
import { UserList2 } from '../../views/Private/UsersList/usersList.type'

import './Downloader.scss'
import { translateDatas } from '../../utils/functions/keys.function'

export const DownloaderCSV: FC<Csv<UserList2>> = ({ data }) => {
    const { formatMessage } = useIntl()
    const datas = translateDatas(data, formatMessage)

    const keys = Object.keys(datas[0])

    return (
        <CsvDownload
            extension='.csv'
            separator=';'
            wrapColumnChar=' '
            columns={keys}
            datas={datas}
            filename='reporte'
            title='Informe usuarios'
            className='main-csv'
        >
            <Button className='main-csv__btn'>
                {formatMessage({ id: 'text.downloader', objVars: { field: 'CSV' } })}
            </Button>
        </CsvDownload>
    )
}

export default CsvDownload
