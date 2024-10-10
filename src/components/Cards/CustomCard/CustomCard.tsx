import { FC } from 'react'
import { Card, Tooltip, Modal } from 'antd'

import { PercentProgress } from '../../Charts/Progress'

import {
    CustomCardProps,
    CustomCardPropTypes,
    CustomCardDefaultProps,
} from './customCard.type'
import { reduceString } from '../../../utils/types/string.util'

const { Meta } = Card

export const CustomCard: FC<CustomCardProps> = ({
    description,
    percentage,
    className,
    image,
    title = '',
    ellipsis,
    openDialog,
}) => {
    return (
        <>
            {image ? (
                <Card
                    title={<h3>{title}</h3>}
                    className={`${className}`}
                    cover={<img src={`${image}`} alt='alt' />}
                    onClick={openDialog!}
                    hoverable
                >
                    <Meta
                        description={
                            ellipsis ? (
                                <Tooltip
                                    title={description}
                                    placement='bottom'
                                    color='#6744c665'
                                >
                                    {reduceString({
                                        value: `${description}`,
                                        maxLength: 70,
                                        ellipsis,
                                    })}
                                </Tooltip>
                            ) : (
                                <p>{description}</p>
                            )
                        }
                    />
                </Card>
            ) : (
                <Card title={title} className={`${className}`}>
                    <PercentProgress percentage={percentage!} />
                </Card>
            )}
        </>
    )
}

CustomCard.propTypes = CustomCardPropTypes
CustomCard.defaultProps = CustomCardDefaultProps

export default CustomCard
