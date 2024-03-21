import propTypes from 'prop-types'

export const PieChartPropTypes = {
    selectedChild: propTypes.string.isRequired,
    selectedPhase: propTypes.string.isRequired,
}

export const PieChartDefaultProps = {}

export type PieChartProps = propTypes.InferProps<typeof PieChartPropTypes>
