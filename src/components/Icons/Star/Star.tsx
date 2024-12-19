import { FC } from 'react'
import { StarOutlined } from '@ant-design/icons'

import './Star.scss'

export const Star: FC = () => (
  <div className='main-star'>
    <div className='main-star__line' />
    <div className='main-star__legend'>
      <StarOutlined />
    </div>
    <div className='main-star__line' />
  </div>
)

export default Star
