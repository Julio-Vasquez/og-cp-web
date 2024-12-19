import propTypes from 'prop-types'

export const LogoPropsTypes = {
  collapsed: propTypes.bool.isRequired,
}

export type LogoProps = propTypes.InferProps<typeof LogoPropsTypes>
