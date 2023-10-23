import { FC } from 'react'
import { Button, Layout, theme } from 'antd'
import { useLocation } from 'react-router-dom'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { HeaderPDefaultProps, HeaderProps, HeaderPropsTypes } from './headerP.type'

import useIntl from '../../../hooks/useIntl'

import './NavBar.scss'
import ItemsNavBar from './itemsNavBar/ItemsHeader'

const { Header, Content } = Layout

export const NavBar: FC<HeaderProps> = ({ children, collapsed, setCollapsed }) => {
    const { formatMessage } = useIntl()
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const { pathname } = useLocation()

    return (
        <Layout>
            <Header className='main-NavBar' style={{ background: colorBgContainer }}>
                <Button
                    type='text'
                    className='main-NavBar__btn'
                    onClick={() => setCollapsed(!collapsed)}
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                />

                <h1>{pathname.toUpperCase().split('/')}</h1>

                <ItemsNavBar />
            </Header>

            {/* <Content
                className='main-header__content'
                style={{ background: colorBgContainer }}
            >
                {children}
            </Content> */}
        </Layout>
    )
}

NavBar.propTypes = HeaderPropsTypes
NavBar.defaultProps = HeaderPDefaultProps

export default NavBar
