import propTypes from 'prop-types'

export const CustomAvatarPropTypes = {
    percent: propTypes.number.isRequired,
}

export const CustomAvatarDefaultProps = {}

export type CustomAvatarProps = propTypes.InferProps<typeof CustomAvatarPropTypes>
