import { FC } from 'react'
import { Button, Layout, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { ItemsHeader } from './itemsHeaderPrivate'

import {
    HeaderPrivateProps,
    HeaderPrivateDefaultProps,
    HeaderPrivatePropsTypes,
} from './headerPrivate.type'
import useIntl from '../../../hooks/useIntl'

import './HeaderPrivate.scss'

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
                onClick={() => setCollapsed(prev => !prev)}
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
