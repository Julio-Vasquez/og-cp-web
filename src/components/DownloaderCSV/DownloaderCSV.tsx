import { FC } from 'react'
import { Button } from 'antd'
import CsvDownload from 'react-csv-downloader'

import useIntl from '../../hooks/useIntl'
import { Columns, Csv } from './Downloader.type'
import { UserList2 } from '../../views/Private/UsersList/usersList.type'

import './Downloader.scss'

export const DownloaderCSV: FC<Csv<UserList2>> = ({ data }) => {
    const { formatMessage } = useIntl()

    const datas = data.map(item => {
        if ('person' in item) {
            const { person, role, user } = item
            const { publicKey, birthDate, ...values } = person
            return {
                [formatMessage({ id: 'text.fullName' })]:
                    Object.values(values).join(' '),
                [formatMessage({ id: 'text.birthDate' })]: birthDate,
                [formatMessage({ id: 'text.mail' })]: user.mail,
                [formatMessage({ id: 'text.username' })]: user.username,
                [formatMessage({ id: 'text.role' })]: role.role,
                [formatMessage({ id: 'text.state' })]: user.state,
            }
        }
        return {}
    })

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
