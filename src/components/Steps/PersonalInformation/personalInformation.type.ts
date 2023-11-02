import propTypes from 'prop-types'

export const PersonalInformationPropTypes = {
    loading: propTypes.bool.isRequired,
}
export const PersonalInformationDefaultProps = {}

export type PersonalInformationProps = propTypes.InferProps<
    typeof PersonalInformationPropTypes
>
