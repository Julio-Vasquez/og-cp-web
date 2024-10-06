import propTypes from 'prop-types'

export const ProgressPropTypes = {
    percent: propTypes.number.isRequired || propTypes.string.isRequired,
}

export const ProgressDefaultProps = {}

export type ProgressProps = propTypes.InferProps<typeof ProgressPropTypes>
