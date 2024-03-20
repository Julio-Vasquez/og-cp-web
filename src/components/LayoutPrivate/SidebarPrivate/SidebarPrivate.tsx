import { Layout, Menu } from 'antd'
import { FC, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Logo from '../../Logo'
import ranking from '../../../assets/svg/ranking.svg'
import profile from '../../../assets/svg/iconPerfil.svg'
import dashboard from '../../../assets/svg/dashboard.svg'
import statistics from '../../../assets/svg/statistics.svg'

import useIntl from '../../../hooks/useIntl'
import {
    SidebarPrivateProps,
    SidebarPrivatePropsDefault,
    SidebarPrivatePropsTypes,
} from './sidebarPrivate.type'
import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import './SidebarPrivate.scss'

const { Sider } = Layout

const getIcon = (path: string) => <img src={path} width={25} />

export const SidebarPrivate: FC<SidebarPrivateProps> = ({ collapsed }) => {
    const { pathname } = useLocation()
    const { formatMessage } = useIntl()

    const Items = [
        {
            key: '1',
            label: (
                <Link to={RP.profile}>{formatMessage({ id: 'title.profile' })}</Link>
            ),
            icon: getIcon(profile),
        },
        {
            key: '2',
            label: (
                <Link to={RP.dashboard}>
                    {formatMessage({ id: 'title.dashboard' })}
                </Link>
            ),
            icon: getIcon(dashboard),
        },
        {
            key: '3',
            label: (
                <Link to={RP.statistics}>
                    {formatMessage({ id: 'title.statistics' })}
                </Link>
            ),
            icon: getIcon(statistics),
        },
        {
            key: '4',
            label: (
                <Link to={RP.ranking}>
                    {formatMessage({ id: 'title.ranking' })}{' '}
                </Link>
            ),
            icon: getIcon(ranking),
        },
    ]

    const key = Items.find(item => item.label.props.to === pathname)?.key

    const [activeSide, setActiveSide] = useState([key ?? '2'])
    const handleClick = (key: string) => setActiveSide([key])

    const menu = Items.map((item, index) => ({
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
            <Logo collapsed={collapsed} />

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

SidebarPrivate.propTypes = SidebarPrivatePropsTypes
SidebarPrivate.defaultProps = SidebarPrivatePropsDefault

export default SidebarPrivate
