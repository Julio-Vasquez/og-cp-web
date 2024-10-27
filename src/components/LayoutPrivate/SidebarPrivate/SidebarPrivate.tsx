import { Layout, Menu } from 'antd'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

import { LogoDashboard } from '../../Avatars/LogoDashboard'

import {
    SidebarPrivateProps,
    SidebarPrivatePropsTypes,
    SidebarPrivatePropsDefault,
} from './sidebarPrivate.type'
import useIntl from '../../../hooks/useIntl'
import useData from '../../../hooks/useData'
import { AUTH } from '../../../utils/constants/redux.constants'
import { LANGS } from '../../../utils/constants/language.constant'
import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import './SidebarPrivate.scss'

const { Sider } = Layout

const getIcon = (path: string) => <img src={path} width={25} />

export const SidebarPrivate: FC<SidebarPrivateProps> = ({ collapsed }) => {
    const { menu: itemMenu } = useData({ reducer: AUTH })
    const tMenu = itemMenu ?? []
    const { pathname } = useLocation()
    const { formatMessage } = useIntl()

    const { i18n } = useTranslation()
    const lang = i18n.language === LANGS.en.value

    const menuSide = tMenu.map((item, key) => {
        return {
            key,
            label: (
                <Link to={RP[item.en.toLowerCase() as keyof typeof RP]}>
                    {lang ? item.en : item.es}
                </Link>
            ),
            icon: getIcon(item.icon),
        }
    })

    const key = menuSide.find(item => item.label.props.to === pathname)?.key

    const [activeSide, setActiveSide] = useState<string[]>([key?.toString() ?? '1'])
    const handleClick = (key: string) => {
        console.log(key, activeSide)

        setActiveSide([key])
    }

    const menu = menuSide.map((item, index) => ({
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

SidebarPrivate.propTypes = SidebarPrivatePropsTypes
SidebarPrivate.defaultProps = SidebarPrivatePropsDefault

export default SidebarPrivate
