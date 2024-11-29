import { FC } from 'react'
import { Card } from 'antd'

import { TooltipX } from '../../TooltipX/TooltipX'
import { PercentProgress } from '../../Charts/Progress'

import {
    CustomCardProps,
    CustomCardPropTypes,
    CustomCardDefaultProps,
} from './customCard.type'

const { Meta } = Card

export const CustomCard: FC<CustomCardProps> = ({
    image,
    loading,
    ellipsis,
    className,
    title,
    percentage,
    description,
    visible,
    openDialog,
    closeDialog,
}) => {
    return (
        <>
            {image ? (
                <Card
                    hoverable
                    loading={loading}
                    onClick={openDialog!}
                    title={
                        <h3>
                            <TooltipX
                                ellipsis={ellipsis!}
                                title={title!}
                                color='#6744c665'
                                placement='top'
                                maxLength={15}
                                value={`${title}`}
                            />
                        </h3>
                    }
                    className={`${className}`}
                    cover={<img src={`${image}`} alt='alt' />}
                >
                    <Meta
                        description={
                            ellipsis ? (
                                <TooltipX
                                    ellipsis={ellipsis}
                                    title={description!}
                                    color='#6744c665'
                                    placement='bottom'
                                    maxLength={70}
                                    value={`${description}`}
                                />
                            ) : (
                                <p>{description}</p>
                            )
                        }
                    />
                </Card>
            ) : (
                <Card loading={loading} title={title} className={`${className}`}>
                    <PercentProgress percentage={percentage!} />
                </Card>
            )}
        </>
    )
}

CustomCard.propTypes = CustomCardPropTypes
CustomCard.defaultProps = CustomCardDefaultProps

export default CustomCard
