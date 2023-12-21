import propTypes from 'prop-types'

export const LogoPropsTypes = {
    collapsed: propTypes.bool.isRequired,
}

export const LogoPropsDefault = {}
export type LogoProps = propTypes.InferProps<typeof LogoPropsTypes>
