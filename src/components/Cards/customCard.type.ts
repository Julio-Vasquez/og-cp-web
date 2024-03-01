import propTypes from 'prop-types'
export const CustomCardPropTypes = {
    backGroundColor: propTypes.string,
}

export const CustomCardDefaultProps = {}

export type CustomCardProps = propTypes.InferProps<typeof CustomCardPropTypes>
