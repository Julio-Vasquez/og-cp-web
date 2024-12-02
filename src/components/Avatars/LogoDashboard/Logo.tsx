import { FC } from 'react'
import { LogoProps, LogoPropsDefault, LogoPropsTypes } from './logo.type'

import image from '../../../assets/svg/layout/logo.svg'

import { Link } from 'react-router-dom'
import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import './Logo.scss'

export const LogoDashboard: FC<LogoProps> = () => (
    <Link to={RP.dashboard} className='main-logo'>
        <img src={image} alt='img' className='main-logo__img' />
    </Link>
)

LogoDashboard.propTypes = LogoPropsTypes
LogoDashboard.defaultProps = LogoPropsDefault

export default LogoDashboard
