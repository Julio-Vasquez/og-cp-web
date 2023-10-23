import { FC } from 'react'
import { useDispatch, useStore } from 'react-redux'
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

export const ItemsNavBar: FC<ItemsNavBarProps> = () => {
    const { user } = useData({ reducer: AUTH })
    const dispatch = useDispatch()
    const store = useStore()

    console.log(store)

    const handleLogOut = () => {
        dispatch(logout())
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '350px',
                alignItems: 'center',
            }}
        >
            <Space size='middle'>
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

            <Space
                style={{
                    display: 'flex',
                }}
            >
                <Avatar src={iconUser} alt='icon-user' size='large' />
                <div>
                    <h4
                        style={{
                            fontSize: '16px',
                            lineHeight: '1.6em',
                        }}
                    >
                        {!user ? 'Username' : user}
                    </h4>
                    <p style={{ fontSize: '12px', lineHeight: '0em' }}>
                        Super Admin
                    </p>
                </div>
            </Space>
        </div>
    )
}

ItemsNavBar.propTypes = ItemsNavBarPropsTypes
ItemsNavBar.defaultProps = ItemsNavBarDefaultProps

export default ItemsNavBar
