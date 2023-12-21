import { StarOutlined } from '@ant-design/icons'

import './Star.scss'

const Star = () => (
    <div className='main-star'>
        <div className='main-star__line' />
        <div className='main-star__legend'>
            <StarOutlined />
        </div>
        <div className='main-star__line' />
    </div>
)

export default Star
