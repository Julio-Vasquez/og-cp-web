import { FC } from 'react'

import { Card } from 'antd'

import {
    CustomCardDefaultProps,
    CustomCardPropTypes,
    CustomCardProps,
} from './customCard.type'

export const CustomCard: FC<CustomCardProps> = ({ backGroundColor }) => {
    return (
        <Card
            style={{
                width: '100%',
                margin: '0 5px',
                backgroundColor: `${backGroundColor}`,
            }}
        >
            CustomCard
        </Card>
    )
}

CustomCard.propTypes = CustomCardPropTypes
CustomCard.defaultProps = CustomCardDefaultProps

export default CustomCard
