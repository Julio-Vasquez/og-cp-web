import { Layout, Menu } from 'antd'
import { FC, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { LogoDashboard } from '../../Avatars/LogoDashboard'

import useData from '../../../hooks/useData'
import { useMenuItems } from '../../../hooks/useMenuItems'
import { AUTH } from '../../../utils/constants/redux.constants'
import { type Collapse } from '../../../utils/types/generics.type'

import './SidebarPrivate.scss'

const { Sider: SideBar } = Layout

export const SidebarPrivate: FC<Collapse> = ({ collapsed }) => {
  const { pathname } = useLocation()
  const { menu: itemMenu } = useData({ reducer: AUTH })
  const menuSidebar = useMenuItems(itemMenu)

  const key =
    menuSidebar.find(item => item.label.props.to === pathname)?.key.toString() || '0'

  const [activeSide, setActiveSide] = useState<string[]>([key])

  const menu = menuSidebar.map((item, index) => ({
    ...item,
    onClick: () => setActiveSide([`${index + 1}`]),
  }))

  return (
    <SideBar collapsible collapsed={collapsed} theme='light' trigger={null}>
      <LogoDashboard collapsed={collapsed} />

      <Menu
        className='main-sidebar-private'
        theme='light'
        mode='inline'
        defaultSelectedKeys={activeSide}
        items={menu}
      />
    </SideBar>
  )
}

export default SidebarPrivate
