import propTypes from 'prop-types'

export const CustomCardPropTypes = {
    image: propTypes.string,
    title: propTypes.string,
    visible: propTypes.bool,
    ellipsis: propTypes.bool,
    openDialog: propTypes.func,
    closeDialog: propTypes.func,
    percentage: propTypes.number,
    description: propTypes.string,
    loading: propTypes.bool.isRequired,
    className: propTypes.string.isRequired,
}

export const CustomCardDefaultProps = {}

export type CustomCardProps = propTypes.InferProps<typeof CustomCardPropTypes>
