import { FC } from 'react'
import { Button, Layout, theme } from 'antd'
import { useLocation } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { ItemsHeader } from './itemsHeaderPrivate/ItemsHeader'

import {
    HeaderPrivateProps,
    HeaderPrivateDefaultProps,
    HeaderPrivatePropsTypes,
} from './headerPrivate.type'

import './HeaderPrivate.scss'

const { Header } = Layout

export const HeaderPrivate: FC<HeaderPrivateProps> = ({
    collapsed,
    setCollapsed,
}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const { pathname } = useLocation()

    const title = pathname.toUpperCase().split('/')

    return (
        <Header
            className='main-header-private'
            style={{ background: colorBgContainer }}
        >
            <Button
                type='text'
                onClick={() => setCollapsed(!collapsed)}
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            />
            <h1 className='main-header-private__title'>{title}</h1>
            <ItemsHeader />
        </Header>
    )
}

HeaderPrivate.propTypes = HeaderPrivatePropsTypes
HeaderPrivate.defaultProps = HeaderPrivateDefaultProps

export default HeaderPrivate
