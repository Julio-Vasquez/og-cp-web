import propTypes from 'prop-types'

export const AccountPropsTypes = {
    loading: propTypes.bool,
}
export const AccountDefaultProps = {}

export type AccountProps = propTypes.InferProps<typeof AccountPropsTypes>
