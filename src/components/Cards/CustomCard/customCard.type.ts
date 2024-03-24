import propTypes from 'prop-types'

export const CustomCardPropTypes = {
    backGroundColor: propTypes.string,
    text: propTypes.string,
}

export const CustomCardDefaultProps = {
    text: 'CustomCard',
}

export type CustomCardProps = propTypes.InferProps<typeof CustomCardPropTypes>
