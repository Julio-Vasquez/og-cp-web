import { Layout } from 'antd'
import {
    LayoutPrivateProps,
    LayoutPrivateDefaultProps,
    LayoutPrivatePropsTypes,
} from './layoutPrivate.types'
import { FC, lazy, useState } from 'react'

import './Layout.scss'
import SiderP from './SiderP'
import NavBar from './NavBar'

const { Content } = Layout

export const LayoutPrivate: FC<LayoutPrivateProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout className='main-layout'>
            <SiderP collapsed={collapsed} />
            <Layout>
                <NavBar collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: 'gray',
                    }}
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
