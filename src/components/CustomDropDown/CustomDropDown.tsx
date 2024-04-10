import { FC } from 'react'
import { Avatar, Dropdown, MenuProps } from 'antd'

import { useDispatch } from 'react-redux'
import { logout } from '../../services/Auth/auth.slice'
import { CustomDropDownProps } from './customDropDown.type'

import './CustomDropDown.scss'

export const CustomDropDown: FC<CustomDropDownProps> = ({ iconUser, payload }) => {
    const dispatch = useDispatch()

    const handleLogOut = () => dispatch(logout())

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: <div onClick={handleLogOut}>cerrar sesión</div>,
        },
    ]
    return (
        <Dropdown menu={{ items }} placement='bottom' arrow>
            <div className='main-drop-down'>
                <Avatar src={iconUser} alt='icon-user' size='large' />
                <div>
                    <h4>{payload?.username ?? 'Username'}</h4>
                    <p>{payload?.role}</p>
                </div>
            </div>
        </Dropdown>
    )
}

export default CustomDropDown
