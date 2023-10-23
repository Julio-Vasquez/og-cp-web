import propTypes from 'prop-types'

export const HeaderPropsTypes = {
    children: propTypes.element,
    collapsed: propTypes.bool.isRequired,
    setCollapsed: propTypes.func.isRequired,
}

export const HeaderPDefaultProps = {}
export type HeaderProps = propTypes.InferProps<typeof HeaderPropsTypes>
