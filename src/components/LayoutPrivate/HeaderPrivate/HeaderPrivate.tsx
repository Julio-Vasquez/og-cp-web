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
import useIntl from '../../../hooks/useIntl'

const { Header } = Layout

export const HeaderPrivate: FC<HeaderPrivateProps> = ({
    collapsed,
    setCollapsed,
}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const { formatMessage } = useIntl()

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
            <h1 className='main-header-private__title'>
                {formatMessage({ id: 'title.innocentlyLearning' })}
            </h1>
            <ItemsHeader />
        </Header>
    )
}

HeaderPrivate.propTypes = HeaderPrivatePropsTypes
HeaderPrivate.defaultProps = HeaderPrivateDefaultProps

export default HeaderPrivate
