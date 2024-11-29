import { Layout, Menu } from 'antd'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { LogoDashboard } from '../../Avatars/LogoDashboard'

import {
    SidebarPrivateProps,
    SidebarPrivatePropsDefault,
} from './sidebarPrivate.type'
import useIntl from '../../../hooks/useIntl'
import useData from '../../../hooks/useData'
import { useMenuItems } from '../../../hooks/useMenuItems'
import { AUTH } from '../../../utils/constants/redux.constants'

import './SidebarPrivate.scss'

const { Sider } = Layout

export const SidebarPrivate: FC<SidebarPrivateProps> = ({ collapsed }) => {
    const { menu: itemMenu } = useData({ reducer: AUTH })

    const { pathname } = useLocation()
    const { formatMessage } = useIntl()
    const menuSidebar = useMenuItems(itemMenu)

    const key = menuSidebar?.find(item => item?.label.props.to === pathname)?.key

    const [activeSide, setActiveSide] = useState<string[]>([key?.toString() ?? '1'])
    const handleClick = (key: string) => setActiveSide([key])

    const menu = menuSidebar?.map((item, index) => ({
        ...item,
        onClick: () => handleClick(`${index + 1}`),
    }))

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            className='main-sidebar-private'
        >
            <LogoDashboard collapsed={collapsed} />

            <h2 className='main-sidebar-private__subtitle'>
                {!collapsed && formatMessage({ id: 'title.menu' })}
            </h2>

            <Menu
                className='main-sidebar-private__menu'
                theme='light'
                mode='inline'
                defaultSelectedKeys={activeSide}
                items={menu}
            />
        </Sider>
    )
}

SidebarPrivate.defaultProps = SidebarPrivatePropsDefault

export default SidebarPrivate
