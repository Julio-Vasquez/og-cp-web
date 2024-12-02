import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Avatar, Dropdown, MenuProps, Space } from 'antd'

import User from '../../Avatars/User'

import useIntl from '../../../hooks/useIntl'
import { UserActionsProps } from './userActions.type'
import { logout } from '../../../services/Auth/auth.slice'
import iconLogOut from '../../../assets/svg/iconLogOut.svg'
import iconLanguage from '../../../assets/svg/iconLanguage.svg'
import iconNotification from '../../../assets/svg/iconNotification.svg'
import { Data } from '../../LayoutPrivate/HeaderPrivate/itemsHeaderPrivate/itemsHeader.type'

import './UserActions.scss'

export const CustomDropDown: FC<UserActionsProps> = ({ role, username }) => {
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
                <div>
                    {username} | {role}
                </div>
            ),
        },

        {
            key: '2',
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
        <Dropdown menu={{ items }} placement='bottomRight' arrow trigger={['click']}>
            <User username={username} />
        </Dropdown>
    )
}

export default CustomDropDown
