import { FC, lazy } from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import {
    SidebarPrivateProps,
    SidebarPrivatePropsDefault,
    SidebarPrivatePropsTypes,
} from './sidebarPrivate.type'

import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import useIntl from '../../../hooks/useIntl'

import dashboard from '../../../assets/svg/dashboard.svg'
import statistics from '../../../assets/svg/statistics.svg'
import ranking from '../../../assets/svg/ranking.svg'
import profile from '../../../assets/svg/iconPerfil.svg'

import './SidebarPrivate.scss'

const Logo = lazy(() => import('../../Logo'))

const { Sider } = Layout

export const SidebarPrivate: FC<SidebarPrivateProps> = ({ collapsed }) => {
    const { formatMessage } = useIntl()
    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            className='main-sidebar-private'
        >
            <Logo collapsed={collapsed} />

            {collapsed ? (
                <h2 className='main-sidebar-private__subtitle' />
            ) : (
                <h2 className='main-sidebar-private__subtitle'>
                    {formatMessage({ id: 'title.mainMenu' })}
                </h2>
            )}

            <Menu
                className='main-sidebar-private__menu'
                theme='light'
                mode='inline'
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        label: (
                            <Link to={RP.profile}>
                                {formatMessage({ id: 'title.profile' })}
                            </Link>
                        ),
                        icon: <img src={profile} width={25} />,
                    },
                    {
                        key: '2',
                        label: (
                            <Link to={RP.dashboard}>
                                {formatMessage({ id: 'title.dashboard' })}
                            </Link>
                        ),
                        icon: <img src={dashboard} width={25} />,
                    },
                    {
                        key: '3',
                        icon: <img src={statistics} width={25} />,
                        label: (
                            <Link to={RP.statistics}>
                                {formatMessage({ id: 'title.statistics' })}
                            </Link>
                        ),
                    },
                    {
                        key: '4',
                        icon: <img src={ranking} width={25} />,
                        label: (
                            <Link to={RP.ranking}>
                                {formatMessage({ id: 'title.ranking' })}{' '}
                            </Link>
                        ),
                    },
                ]}
            />
        </Sider>
    )
}

SidebarPrivate.propTypes = SidebarPrivatePropsTypes
SidebarPrivate.defaultProps = SidebarPrivatePropsDefault

export default SidebarPrivate
