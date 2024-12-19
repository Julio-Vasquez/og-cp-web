import { FC, useState } from 'react'
import { Layout, theme } from 'antd'

import HeaderPrivate from './HeaderPrivate'
import { SidebarPrivate } from './SidebarPrivate'

import {
  LayoutPrivateProps,
  LayoutPrivatePropsTypes,
  LayoutPrivateDefaultProps,
} from './layoutPrivate.types'

import './Layout.scss'

const { Content } = Layout

export const LayoutPrivate: FC<LayoutPrivateProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout className='main-layout'>
      <SidebarPrivate collapsed={collapsed} />
      <Layout>
        <HeaderPrivate collapsed={collapsed} setCollapsed={setCollapsed} />
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
