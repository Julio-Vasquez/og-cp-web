import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Badge, Space, Spin } from 'antd'

import iconUser from '../../../../assets/svg/iconUser.svg'
import iconLogOut from '../../../../assets/svg/iconLogOut.svg'
import iconLanguage from '../../../../assets/svg/iconLanguage.svg'
import iconNotification from '../../../../assets/svg/iconNotification.svg'

import api from '../../../../api'
import { useQuery } from '../../../../hooks/api'
import { logout } from '../../../../services/Auth/auth.slice'
import { DataUser } from '../../../../utils/types/userData.type'
import { Status } from '../../../../utils/constants/status.enum'
import {
    ItemsNavBarDefaultProps,
    ItemsNavBarPropsTypes,
    ItemsNavBarProps,
    Data,
} from './itemsHeader.type'

import './ItemsHeader.scss'

export const ItemsHeader: FC<ItemsNavBarProps> = () => {
    const dispatch = useDispatch()

    const { data: userMe, loading } = useQuery<DataUser>({
        functionFetch: api.defaultData.userMe,
    })

    const payload = userMe.status === Status.success ? userMe.payload : undefined

    const handleLogOut = () => dispatch(logout())

    const data: Data[] = [
        { src: iconNotification, count: 5, color: '#6744c6' },
        { src: iconLanguage },
        { src: iconLogOut, onClick: handleLogOut },
    ]

    return (
        <Spin spinning={loading}>
            <div className='main-items__header'>
                <Space size='middle' className='main-items__icons'>
                    {data.map(({ src, ...opts }) => (
                        <Badge {...opts} key={src}>
                            <Avatar
                                shape='square'
                                src={src}
                                alt='imag-notification'
                            />
                        </Badge>
                    ))}
                </Space>
                <Space className='main-items__space'>
                    <Avatar src={iconUser} alt='icon-user' size='large' />
                    <div className='main-items__name-roles'>
                        <h4>{payload?.username ?? 'Username'}</h4>
                        <p>{payload?.role}</p>
                    </div>
                </Space>
            </div>
        </Spin>
    )
}

ItemsHeader.propTypes = ItemsNavBarPropsTypes
ItemsHeader.defaultProps = ItemsNavBarDefaultProps

export default ItemsHeader
