import { Divider, Spin } from 'antd'

import { Modals } from '../../../components/Modal'
import iconUser from '../../../assets/svg/iconUser.svg'

import api from '../../../api'
import { useGet } from '../../../hooks/api'
import useIntl from '../../../hooks/useIntl'
import { useVisible } from '../../../hooks/useVisible'
import { ResponseFetch } from '../../../utils/api/api.util'
import { DataUser } from '../../../utils/types/userData.type'

import './Profile.scss'

export const Profile = () => {
    const { visible, openDialog, closeDialog } = useVisible()

    const { data: userMe, loading } = useGet<ResponseFetch<DataUser>>({
        functionFetch: api.defaultData.userMe,
    })

    const { formatMessage } = useIntl()

    const payload = userMe.status === 'success' ? userMe.payload : undefined

    return (
        <Spin spinning={loading}>
            <div className='main-profile'>
                <img
                    src={iconUser}
                    alt='photo profile'
                    className='main-profile__photo'
                />
                <div className='main-profile__data'>
                    <h1 className='main-profile__data__name'>
                        {payload?.fullName ?? formatMessage({ id: 'text.fullName' })}
                    </h1>
                    <div className='main-profile__data__user'>
                        <p>{formatMessage({ id: 'text.username' })}</p>
                        <span>{payload?.username}</span>
                    </div>
                    <div className='main-profile__data__mail'>
                        <p>{formatMessage({ id: 'text.mail' })}</p>
                        <span>{payload?.mail}</span>
                    </div>
                    <div className='main-profile__data__birth-date'>
                        <p>{formatMessage({ id: 'text.birthDate' })}</p>
                        <span>{payload?.birthDate}</span>
                    </div>
                    <div className='main-profile__data__role'>
                        <p>{formatMessage({ id: 'text.role' })}</p>
                        <span>{payload?.role}</span>
                    </div>
                </div>

                <Modals
                    isOpen={visible}
                    openModal={openDialog}
                    closeModal={closeDialog}
                    children={<h1>hi!</h1>}
                />
            </div>
        </Spin>
    )
}

export default Profile
