import propTypes from 'prop-types'
export const LayoutPrivatePropsTypes = {
    children: propTypes.element,
}
export const LayoutPrivateDefaultProps = {}
export type LayoutPrivateProps = propTypes.InferProps<typeof LayoutPrivatePropsTypes>
