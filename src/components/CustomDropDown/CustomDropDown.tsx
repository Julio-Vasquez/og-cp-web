import { FC } from 'react'
import { Avatar, Badge, Dropdown, MenuProps, Space } from 'antd'

import { useDispatch } from 'react-redux'
import { logout } from '../../services/Auth/auth.slice'
import { CustomDropDownProps } from './customDropDown.type'
import iconLanguage from '../../assets/svg/iconLanguage.svg'
import iconNotification from '../../assets/svg/iconNotification.svg'

import './CustomDropDown.scss'
import { Data } from '../LayoutPrivate/HeaderPrivate/itemsHeaderPrivate/itemsHeader.type'

export const CustomDropDown: FC<CustomDropDownProps> = ({ payload }) => {
    const dispatch = useDispatch()

    const handleLogOut = () => dispatch(logout())
    const data: Data[] = [
        { src: iconNotification, count: 5, color: '#6744c6' },
        { src: iconLanguage },
    ]
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <div className='items'>
                    {data.map(({ src, ...opts }) => (
                        <Badge {...opts} key={src}>
                            <Space>
                                <Avatar
                                    shape='square'
                                    src={src}
                                    alt='imag-notification'
                                />
                            </Space>
                        </Badge>
                    ))}
                </div>
            ),
        },
        {
            key: '2',
            label: <div onClick={handleLogOut}>cerrar sesión</div>,
        },
    ]
    return (
        <Dropdown menu={{ items }} placement='bottom' arrow>
            <div className='main-drop-down'>
                <h4>{payload?.username ?? 'Username'}</h4>
                <p>{payload?.role}</p>
            </div>
        </Dropdown>
    )
}

export default CustomDropDown
