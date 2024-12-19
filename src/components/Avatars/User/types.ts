import propTypes from 'prop-types'

export const UserPropTypes = {
  username: propTypes.string.isRequired,
}

export type UserProps = propTypes.InferProps<typeof UserPropTypes>
