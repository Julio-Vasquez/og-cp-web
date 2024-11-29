import { FC } from 'react'
import { Carousel } from 'antd'

import {
    CustomCarouselDefaultProp,
    CustomCarouselPropTypes,
    CustomCarouselProps,
} from './customCarousel.type'

import './CustomCarousel.scss'

export const CustomCarousel: FC<CustomCarouselProps> = ({ children }) => (
    <div className='custom-carousel'>
        <Carousel autoplaySpeed={5000} autoplay>
            {children}
        </Carousel>
    </div>
)

CustomCarousel.propTypes = CustomCarouselPropTypes
CustomCarousel.defaultProps = CustomCarouselDefaultProp

export default CustomCarousel
