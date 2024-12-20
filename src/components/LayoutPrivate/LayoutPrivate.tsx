import { FC, useState } from 'react'
import { Layout, theme } from 'antd'

import HeaderPrivate from './HeaderPrivate'
import { SidebarPrivate } from './SidebarPrivate'

import { type Children } from '../../utils/types/generics.type'

import './Layout.scss'

const { Content } = Layout

export const LayoutPrivate: FC<Children> = ({ children }) => {
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

export default LayoutPrivate
