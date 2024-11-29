import propTypes from 'prop-types'

export const ProgressPropTypes = {
    percentage: propTypes.number.isRequired,
}

export const ProgressDefaultProps = {}

export type ProgressProps = propTypes.InferProps<typeof ProgressPropTypes>
