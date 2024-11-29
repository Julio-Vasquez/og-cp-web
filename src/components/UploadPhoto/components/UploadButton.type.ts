import propTypes from 'prop-types'

export const UploadButtonPropTypes = { loading: propTypes.bool.isRequired }

export const UploadButtonDefaultProps = { loading: false }

export type UploadButtonProps = propTypes.InferProps<typeof UploadButtonPropTypes>
