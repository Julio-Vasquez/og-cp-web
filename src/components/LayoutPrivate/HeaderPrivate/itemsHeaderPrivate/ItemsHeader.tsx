import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Badge, Space } from 'antd'

import {
    ItemsNavBarDefaultProps,
    ItemsNavBarPropsTypes,
    ItemsNavBarProps,
} from './itemsHeader.type'

import iconUser from '../../../../assets/svg/iconUser.svg'
import iconLogOut from '../../../../assets/svg/iconLogOut.svg'
import iconLanguage from '../../../../assets/svg/iconLanguage.svg'
import iconNotification from '../../../../assets/svg/iconNotification.svg'

import useData from '../../../../hooks/useData'
import { logout } from '../../../../services/Auth/auth.slice'
import { AUTH } from '../../../../utils/constants/redux.constants'

import './ItemsHeader.scss'

export const ItemsHeader: FC<ItemsNavBarProps> = () => {
    const { user } = useData({ reducer: AUTH })
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout())
    }

    return (
        <div className='main-items__header'>
            <Space size='middle' className='main-items__icons'>
                <Badge count={5} color='#6744c6'>
                    <Avatar
                        shape='square'
                        src={iconNotification}
                        alt='imag-notification'
                    />
                </Badge>
                <Badge>
                    <Avatar
                        shape='square'
                        src={iconLanguage}
                        alt='imag-notification'
                    />
                </Badge>
                <Badge>
                    <Avatar
                        shape='square'
                        src={iconLogOut}
                        alt='imag-notification'
                        onClick={handleLogOut}
                    />
                </Badge>
            </Space>

            <Space className='main-items__space'>
                <Avatar src={iconUser} alt='icon-user' size='large' />
                <div className='main-items__name-roles'>
                    <h4>{user ? user : 'Username'}</h4>
                    <p>Super Admin</p>
                </div>
            </Space>
        </div>
    )
}

ItemsHeader.propTypes = ItemsNavBarPropsTypes
ItemsHeader.defaultProps = ItemsNavBarDefaultProps

export default ItemsHeader
