import propTypes from 'prop-types'

export const CustomCardPropTypes = {
    title: propTypes.string,
    description: propTypes.string || propTypes.number,
    image: propTypes.string,
    className: propTypes.string.isRequired,
    backGroundColor: propTypes.string,
    reducerString: propTypes.func,
}

export const CustomCardDefaultProps = {}

export type CustomCardProps = propTypes.InferProps<typeof CustomCardPropTypes>
