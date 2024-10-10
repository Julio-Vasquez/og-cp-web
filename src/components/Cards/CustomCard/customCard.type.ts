import propTypes from 'prop-types'

export const CustomCardPropTypes = {
    title: propTypes.string,
    description: propTypes.string,
    percentage: propTypes.number,
    image: propTypes.string,
    className: propTypes.string.isRequired,
    ellipsis: propTypes.bool,
    visible: propTypes.bool,
    openDialog: propTypes.func,
}

export const CustomCardDefaultProps = {}

export type CustomCardProps = propTypes.InferProps<typeof CustomCardPropTypes>
