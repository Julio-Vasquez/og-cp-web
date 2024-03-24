import { FC } from 'react'
import { LogoProps, LogoPropsDefault, LogoPropsTypes } from './logo.type'

import image from '../../assets/img/image.png'

import './Logo.scss'

export const LogoDashboard: FC<LogoProps> = ({ collapsed }) => (
    <div className='main-logo'>
        <div className='main-logo__container-img'>
            <img src={image} alt='img' />
        </div>
    </div>
)

LogoDashboard.propTypes = LogoPropsTypes
LogoDashboard.defaultProps = LogoPropsDefault

export default LogoDashboard
