import { FC } from 'react'
import { LogoProps, LogoPropsDefault, LogoPropsTypes } from './logo.type'

import image from '../../assets/img/image.png'

import './Logo.scss'

export const Logo: FC<LogoProps> = ({ collapsed }) => {
    return (
        <div className='main-logo'>
            {!collapsed ? (
                <>
                    <div className='main-logo__container-img'>
                        <img src={image} alt='img' />
                    </div>
                    <h2 className='main-sider__title'>Innocently Learning</h2>
                </>
            ) : (
                <div className='main-logo__container-img'>
                    <img src={image} alt='img' />
                </div>
            )}
        </div>
    )
}

Logo.propTypes = LogoPropsTypes
Logo.defaultProps = LogoPropsDefault

export default Logo
