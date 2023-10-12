import { FC, useState } from 'react'

import {
    LayoutPrivateProps,
    LayoutPrivateDefaultProps,
    LayoutPrivatePropsTypes,
} from './layoutPrivate.types'
import { Layout } from 'antd'

import './Layout.scss'
import { HeaderP } from './Header/HeaderP'
import SiderP from './SiderP'

const { Sider } = Layout

export const LayoutPrivate: FC<LayoutPrivateProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <Layout className='main-layout'>
            <SiderP collapsed={collapsed} />
            <HeaderP collapsed={collapsed} setCollapsed={setCollapsed}>
                {children}
            </HeaderP>
        </Layout>
    )
}

LayoutPrivate.propTypes = LayoutPrivatePropsTypes

LayoutPrivate.defaultProps = LayoutPrivateDefaultProps

export default LayoutPrivate
