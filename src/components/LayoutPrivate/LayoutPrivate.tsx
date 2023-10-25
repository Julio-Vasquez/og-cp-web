import { FC, useState } from 'react'
import { Layout, theme } from 'antd'

import SiderP from './SiderP'
import NavBar from './NavBar'
import {
    LayoutPrivateProps,
    LayoutPrivateDefaultProps,
    LayoutPrivatePropsTypes,
} from './layoutPrivate.types'

import './Layout.scss'

const { Content } = Layout

export const LayoutPrivate: FC<LayoutPrivateProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()
    return (
        <Layout className='main-layout'>
            <SiderP collapsed={collapsed} />
            <Layout>
                <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    className='main-layout__content'
                    style={{ background: colorBgContainer }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

LayoutPrivate.propTypes = LayoutPrivatePropsTypes

LayoutPrivate.defaultProps = LayoutPrivateDefaultProps

export default LayoutPrivate
