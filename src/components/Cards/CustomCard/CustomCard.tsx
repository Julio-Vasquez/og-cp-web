import { FC } from 'react'
import { Card } from 'antd'

import {
    CustomCardDefaultProps,
    CustomCardPropTypes,
    CustomCardProps,
} from './customCard.type'

import './CustomCard.scss'

export const CustomCard: FC<CustomCardProps> = ({ backGroundColor, text }) => (
    <Card className='custom-card' style={{ backgroundColor: `${backGroundColor}` }}>
        {text}
    </Card>
)

CustomCard.propTypes = CustomCardPropTypes
CustomCard.defaultProps = CustomCardDefaultProps

export default CustomCard
