import { FC } from 'react'
import { HeaderPDefaultProps, HeaderProps, HeaderPropsTypes } from './headerP.type'
import { Button, Layout, theme } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import './HeaderP.scss'

const { Header, Content } = Layout

export const HeaderP: FC<HeaderProps> = ({ children, collapsed, setCollapsed }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    return (
        <Layout>
            <Header className='main-header' style={{ background: colorBgContainer }}>
                <Button
                    type='text'
                    className='main-header__btn'
                    onClick={() => setCollapsed(!collapsed)}
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                />
            </Header>

            <Content
                className='main-header__content'
                style={{ background: colorBgContainer }}
            >
                {children}
            </Content>
        </Layout>
    )
}

HeaderP.propTypes = HeaderPropsTypes
HeaderP.defaultProps = HeaderPDefaultProps

export default HeaderP
