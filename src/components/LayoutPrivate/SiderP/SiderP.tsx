import { FC, Fragment } from 'react'
import { Layout, Menu } from 'antd'
import { SiderPProps, SiderPPropsDefault, SiderPPropsTypes } from './siderP.type'

import dashboard from '../../../assets/svg/dashboard.svg'
import statistics from '../../../assets/svg/statistics.svg'
import ranking from '../../../assets/svg/ranking.svg'

import './SiderP.scss'
import Logo from '../../Logo/Logo'
const { Sider } = Layout

export const SiderP: FC<SiderPProps> = ({ collapsed }) => {
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            className='main-sider'
        >
            <Logo collapsed={collapsed} />

            {!collapsed ? (
                <h2 className='main-sider__subtitle'>Main menu</h2>
            ) : (
                <h2 className='main-sider__subtitle' />
            )}

            <Menu
                className='main-sider__menu'
                theme='light'
                mode='inline'
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <img src={dashboard} width={25} />,
                        label: 'Dashboard',
                    },
                    {
                        key: '2',
                        icon: <img src={statistics} width={25} />,
                        label: 'Statistics',
                    },
                    {
                        key: '3',
                        icon: <img src={ranking} width={25} />,
                        label: 'Ranking',
                    },
                ]}
            />
        </Sider>
    )
}

SiderP.propTypes = SiderPPropsTypes
Sider.defaultProps = SiderPPropsDefault

export default SiderP
