import { FC } from 'react'
import { Link } from 'react-router-dom'

import image from '../../../assets/svg/layout/logo.svg'
import { type LogoProps, LogoPropsTypes } from './logo.type'
import { ROUTES_PRIVATE } from '../../../utils/constants/routes.constants'

import './LogoDashboard.scss'

export const LogoDashboard: FC<LogoProps> = () => (
  <Link to={ROUTES_PRIVATE.dashboard} className='main-logo'>
    <img src={image} alt='img' className='main-logo__img' />
  </Link>
)

LogoDashboard.propTypes = LogoPropsTypes

export default LogoDashboard
