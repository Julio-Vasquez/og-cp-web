import propTypes from 'prop-types'
export const CardPresentationPropTypes = {
    payload: propTypes.any.isRequired,
}
export const CardPresentationDefaultProps = {
    payload: {},
}

export type CardPresentationProps = propTypes.InferProps<
    typeof CardPresentationPropTypes
>
