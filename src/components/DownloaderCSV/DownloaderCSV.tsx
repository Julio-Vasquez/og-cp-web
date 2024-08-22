import { FC } from 'react'
import { Button } from 'antd'
import CsvDownload from 'react-csv-downloader'

import { COLUMNS, CSV } from './Downloader.type'
import { USER_LIST } from '../../views/Private/UsersList/usersList.type'

import './Downloader.scss'
import useIntl from '../../hooks/useIntl'

export const DownloaderCSV: FC<CSV> = ({ data, columns }) => {
    const { formatMessage } = useIntl()
    const headers = columns.map(({ title }: COLUMNS) => {
        const data = { id: title, displayName: title }
        if (title === 'Acción') return ''
        return data
    })

    const datas = data.map(({ role, user, person }: USER_LIST) => {
        const { publicKey, birthDate, ...values } = person!
        return {
            'Nombre completo': Object.values(values).join(' '),
            'Fecha de nacimiento': birthDate,
            'Correo electrónico': user.mail,
            'Nombre de usuario': user.username,
            Rol: role.role,
            Estado: user.state,
        }
    })

    return (
        <CsvDownload
            extension='.csv'
            separator=';'
            wrapColumnChar=' '
            columns={headers}
            datas={datas}
            filename='reporte'
            title='Informe usuarios'
            className='main-csv'
        >
            <Button disabled={data.length === 0} className='main-csv__btn'>
                {formatMessage({ id: 'text.downloader', objVars: { field: 'CSV' } })}
            </Button>
        </CsvDownload>
    )
}

export default CsvDownload
