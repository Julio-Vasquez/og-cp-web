import CsvDownload from 'react-csv-downloader'

import { COLUMNS, CSV } from './Downloader.type'
import { USER_LIST } from '../../views/Private/UsersList/usersList.type'

import './Downloader.scss'
import { Button } from 'antd'
export const DownloaderCSV = ({ data, columns }: CSV) => {
    const headers = columns.map(({ title }: COLUMNS) => {
        const data = { id: title, displayName: title }
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
            <Button className='main-csv__btn'>Downloader CVS</Button>
        </CsvDownload>
    )
}
