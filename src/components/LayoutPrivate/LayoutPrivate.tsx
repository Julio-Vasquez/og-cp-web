import { Layout } from 'antd'
import {
    LayoutPrivateProps,
    LayoutPrivateDefaultProps,
    LayoutPrivatePropsTypes,
} from './layoutPrivate.types'
import { FC, lazy, useState } from 'react'

import './Layout.scss'

const HeaderP = lazy(() => import('./NavBar'))
const SiderP = lazy(() => import('./SiderP'))

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
