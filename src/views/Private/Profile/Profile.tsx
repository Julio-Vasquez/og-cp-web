import { Spin } from 'antd'

import { CustomCardOneData } from '../../../components/CustomCardOneData/CustomCardOneData'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useQuery } from '../../../hooks/api'

import { Status } from '../../../utils/constants/status.enum'
import { DataUser } from '../../../utils/types/userData.type'
import { OPTIONS } from '../../../utils/constants/options.constant'

import './Profile.scss'

export const Profile = () => {
    const { formatMessage } = useIntl()
    const { data: userMe, loading } = useQuery<DataUser>({
        functionFetch: api.user.userMe,
    })

    const payload =
        userMe.status === Status.success ? userMe.payload : ({} as DataUser)

    return (
        <Spin spinning={loading}>
            <div className='main-profile'>
                <div className='main-profile__data'>
                    <h1>Datos Personales</h1>
                    <CustomCardOneData
                        pString='Nombres y Apellidos'
                        spanString={`${
                            payload.fullName ??
                            formatMessage({ id: 'text.fullName' })
                        }`}
                    />
                    <CustomCardOneData
                        pString={`${formatMessage({ id: 'text.username' })}`}
                        spanString={`${
                            payload.username ?? formatMessage({ id: 'text.user' })
                        }`}
                    />
                    <CustomCardOneData
                        pString={`${formatMessage({ id: 'text.mail' })}`}
                        spanString={`${
                            payload.mail ?? formatMessage({ id: 'text.mail' })
                        }`}
                    />
                    <CustomCardOneData
                        pString={`${formatMessage({ id: 'text.mail' })}`}
                        spanString={`${
                            payload.mail ?? formatMessage({ id: 'text.mail' })
                        }`}
                    />
                    <CustomCardOneData
                        pString={`${formatMessage({ id: 'text.birthDate' })}`}
                        spanString={`${new Intl.DateTimeFormat(
                            'es-Es',
                            OPTIONS
                        ).format()}`}
                    />
                    <CustomCardOneData
                        pString={`${formatMessage({ id: 'text.role' })}`}
                        spanString={`${
                            payload.role ?? formatMessage({ id: 'text.role' })
                        }`}
                    />
                </div>
                <div className='main-profile__form'></div>
            </div>
        </Spin>
    )
}

export default Profile
