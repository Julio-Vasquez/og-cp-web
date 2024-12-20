import { FC } from 'react'
import { Carousel } from 'antd'

import { type Children } from '../../../utils/types/generics.type'

import './CustomCarousel.scss'

export const CustomCarousel: FC<Children> = ({ children }) => (
  <div className='custom-carousel'>
    <Carousel autoplaySpeed={5000} autoplay>
      {children}
    </Carousel>
  </div>
)

export default CustomCarousel
