import { FC } from 'react'
import { LogoProps, LogoPropsDefault, LogoPropsTypes } from './logo.type'

import image from '../../../assets/img/image.png'

import { Link } from 'react-router-dom'
import { ROUTES_PRIVATE as RP } from '../../../utils/constants/routes.constants'

import './Logo.scss'

export const LogoDashboard: FC<LogoProps> = () => (
    <Link to={RP.dashboard} className='main-logo'>
        <div className='main-logo__container-img'>
            <img src={image} alt='img' />
        </div>
    </Link>
)

LogoDashboard.propTypes = LogoPropsTypes
LogoDashboard.defaultProps = LogoPropsDefault

export default LogoDashboard
