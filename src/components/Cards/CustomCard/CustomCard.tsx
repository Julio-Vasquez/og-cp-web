import { FC } from 'react'
import { Card, Tooltip } from 'antd'

import {
    CustomCardProps,
    CustomCardPropTypes,
    CustomCardDefaultProps,
} from './customCard.type'

import './CustomCard.scss'
import { PercentProgress } from '../../Charts/Progress'

const { Meta } = Card

export const CustomCard: FC<CustomCardProps> = ({
    description,
    backGroundColor,
    className,
    image,
    title,
    reducerString,
}) => {
    const titleCard = title ? <h3>{title}</h3> : ''

    return (
        <>
            {image ? (
                <Card
                    title={titleCard}
                    className={`${className}`}
                    cover={<img src={`${image}`} alt='alt' />}
                    actions={[]}
                >
                    <Meta
                        description={
                            <>
                                {reducerString ? (
                                    <p>
                                        <Tooltip
                                            title={description}
                                            placement='bottomLeft'
                                            color='#6744c665'
                                        >
                                            {reducerString()}
                                        </Tooltip>
                                    </p>
                                ) : (
                                    <p>{description}</p>
                                )}
                            </>
                        }
                    />
                </Card>
            ) : (
                <Card
                    title={title}
                    className={`${className}`}
                    style={{ backgroundColor: `${backGroundColor}` }}
                >
                    <PercentProgress percent={parseInt(`${description}`)} />
                </Card>
            )}
        </>
    )
}

CustomCard.propTypes = CustomCardPropTypes
CustomCard.defaultProps = CustomCardDefaultProps

export default CustomCard
