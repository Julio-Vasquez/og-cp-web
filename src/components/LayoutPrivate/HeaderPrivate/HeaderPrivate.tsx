import { FC } from 'react'
import { Button, Layout, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { ItemsHeader } from './itemsHeaderPrivate'

import useIntl from '../../../hooks/useIntl'
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
    const { token } = theme.useToken()
    const { formatMessage } = useIntl()

    const icon = collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />

    const handleClick = () => setCollapsed(prev => !prev)

    return (
        <Header
            className='main-header-private'
            style={{ background: token.colorBgContainer }}
        >
            <Button type='text' onClick={handleClick} icon={icon} />
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
