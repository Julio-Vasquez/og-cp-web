import { FC } from 'react'
import { Link } from 'react-router-dom'

import image from '../../../assets/svg/layout/logo.svg'
import { type Collapse } from '../../../utils/types/generics.type'
import { ROUTES_PRIVATE } from '../../../utils/constants/routes.constants'

import './LogoDashboard.scss'

export const LogoDashboard: FC<Collapse> = () => (
  <Link to={ROUTES_PRIVATE.dashboard} className='main-logo'>
    <img src={image} alt='img' className='main-logo__img' />
  </Link>
)

export default LogoDashboard
