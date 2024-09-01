import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Badge, Dropdown, MenuProps, Space } from 'antd'

import useIntl from '../../hooks/useIntl'
import { logout } from '../../services/Auth/auth.slice'
import iconLogOut from '../../assets/svg/iconLogOut.svg'
import { CustomDropDownProps } from './customDropDown.type'
import iconLanguage from '../../assets/svg/iconLanguage.svg'
import iconNotification from '../../assets/svg/iconNotification.svg'
import { Data } from '../LayoutPrivate/HeaderPrivate/itemsHeaderPrivate/itemsHeader.type'

import './CustomDropDown.scss'

export const CustomDropDown: FC<CustomDropDownProps> = ({ payload }) => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl()
    const handleLogOut = () => dispatch(logout())

    const data: Data[] = [
        { src: iconNotification, count: 5, color: '#6744c6' },
        { src: iconLanguage },
        { src: iconLogOut },
    ]
    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Space>
                    <Avatar
                        shape='square'
                        src={data[1].src}
                        alt='imag-notification'
                    />
                    {formatMessage({ id: 'text.language' })}
                </Space>
            ),
        },
        {
            key: '2',
            label: (
                <Space>
                    <Badge count={data[0]?.count} color={data[0]?.color}>
                        <Avatar
                            shape='square'
                            src={data[0].src}
                            alt='imag-notification'
                        />
                    </Badge>
                    {formatMessage({ id: 'text.notifications' })}
                </Space>
            ),
        },
        {
            key: '3',
            label: (
                <Space onClick={handleLogOut}>
                    <Avatar
                        shape='square'
                        src={data[2].src}
                        alt='imag-notification'
                    />
                    {formatMessage({ id: 'text.signOut' })}
                </Space>
            ),
        },
    ]
    return (
        <Dropdown menu={{ items }} placement='bottomLeft' arrow>
            <div className='main-drop-down'>
                <h4>{payload?.username ?? 'Username'}</h4>
                <p>{payload?.role}</p>
            </div>
        </Dropdown>
    )
}

export default CustomDropDown
