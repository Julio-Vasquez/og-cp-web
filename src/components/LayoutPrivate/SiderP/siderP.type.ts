import propTypes from 'prop-types'
export const SiderPPropsTypes = {
    collapsed: propTypes.bool.isRequired,
}

export const SiderPPropsDefault = {}
export type SiderPProps = propTypes.InferProps<typeof SiderPPropsTypes>
