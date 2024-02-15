import propTypes from 'prop-types'

export const CustomCarouselPropTypes = {
    children: propTypes.node.isRequired,
}
export const CustomCarouselDefaultProp = {}

export type CustomCarouselProps = propTypes.InferProps<
    typeof CustomCarouselPropTypes
>
