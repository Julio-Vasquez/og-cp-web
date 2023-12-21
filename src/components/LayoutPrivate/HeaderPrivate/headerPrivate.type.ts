import propTypes from 'prop-types'

export const HeaderPrivatePropsTypes = {
    children: propTypes.element,
    collapsed: propTypes.bool.isRequired,
    setCollapsed: propTypes.func.isRequired,
}

export const HeaderPrivateDefaultProps = {}
export type HeaderPrivateProps = propTypes.InferProps<typeof HeaderPrivatePropsTypes>
