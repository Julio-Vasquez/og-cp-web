import { FC } from 'react'
import { Avatar, Button, Dropdown, MenuProps } from 'antd'

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
            <Button className='main-drop-down'>
                <Avatar src={iconUser} alt='icon-user' size='large' />
                <div>
                    <h4>{payload?.username ?? 'Username'}</h4>
                    <p>{payload?.role}</p>
                </div>
            </Button>
        </Dropdown>
    )
}

export default CustomDropDown
