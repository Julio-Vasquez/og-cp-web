import { Divider, Space, Spin } from 'antd'

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

    const { data: userMe, loading: loadingUserMe } = useGet<ResponseFetch<DataUser>>(
        { functionFetch: api.defaultData.userMe }
    )

    const { formatMessage } = useIntl()

    const payload = userMe.status === 'success' ? userMe.payload : undefined

    return (
        <Spin spinning={loadingUserMe}>
            <div className='main-profile'>
                <div className='main-profile__container-photo'>
                    <img
                        src={iconUser}
                        alt='photo profile'
                        className='main-profile__photo'
                    />
                </div>
                <Divider />
                <div className='main-profile__data'>
                    <Space direction='vertical'>
                        <h1 className='main-profile__data__name'>
                            {payload?.fullName ??
                                formatMessage({ id: 'text.fullName' })}
                        </h1>
                        <h3 className='main-profile__data__items'>
                            {formatMessage({ id: 'text.username' })}
                        </h3>
                        <p>{payload?.username}</p>
                        <h3 className='main-profile__data__items'>
                            {formatMessage({ id: 'text.mail' })}
                        </h3>
                        <p>{payload?.mail}</p>
                        <h3 className='main-profile__data__items'>
                            {formatMessage({ id: 'text.birthDate' })}
                        </h3>
                        <p>{payload?.birthDate}</p>
                    </Space>
                    <Space direction='vertical'>
                        <h3 className='main-profile__data__items'>
                            {formatMessage({ id: 'text.role' })}
                        </h3>
                        <p>{payload?.role}</p>
                    </Space>
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
