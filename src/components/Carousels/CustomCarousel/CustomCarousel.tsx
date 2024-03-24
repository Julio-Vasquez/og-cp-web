import { FC } from 'react'
import { Carousel } from 'antd'

import {
    CustomCarouselDefaultProp,
    CustomCarouselPropTypes,
    CustomCarouselProps,
} from './customCarousel.type'

import './CustomCarousel.scss'

export const CustomCarousel: FC<CustomCarouselProps> = ({ children }) => (
    <Carousel autoplaySpeed={5000} className='custom-carousel' autoplay>
        {children}
    </Carousel>
)

CustomCarousel.propTypes = CustomCarouselPropTypes
CustomCarousel.defaultProps = CustomCarouselDefaultProp

export default CustomCarousel
