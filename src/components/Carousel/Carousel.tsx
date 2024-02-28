import { FC } from 'react'
import { Carousel } from 'antd'

import './CustomCarousel.scss'
import {
    CustomCarouselDefaultProp,
    CustomCarouselPropTypes,
    CustomCarouselProps,
} from './customCarousel.type'

const CustomCarousel: FC<CustomCarouselProps> = ({ children }) => {
    return (
        <Carousel autoplaySpeed={5000} className='custom-carousel' autoplay>
            {children}
        </Carousel>
    )
}

CustomCarousel.propTypes = CustomCarouselPropTypes
CustomCarousel.defaultProps = CustomCarouselDefaultProp

export default CustomCarousel
