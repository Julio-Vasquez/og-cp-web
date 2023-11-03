import { FC } from 'react'
import { LogoProps, LogoPropsDefault, LogoPropsTypes } from './logo.type'

import image from '../../assets/img/image.png'
import { formTranslate } from '../../utils/functions/translation.function'

import './Logo.scss'

export const Logo: FC<LogoProps> = ({ collapsed }) => {
    return (
        <div className='main-logo'>
            {collapsed ? (
                <div className='main-logo__container-img'>
                    <img src={image} alt='img' />
                </div>
            ) : (
                <>
                    <div className='main-logo__container-img'>
                        <img src={image} alt='img' />
                    </div>
                    <h2 className='main-sidebar__title'>
                        {formTranslate({ id: 'title.innocentlyLearning' })}
                    </h2>
                </>
            )}
        </div>
    )
}

Logo.propTypes = LogoPropsTypes
Logo.defaultProps = LogoPropsDefault

export default Logo
