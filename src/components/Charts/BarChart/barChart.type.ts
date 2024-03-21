import propTypes from 'prop-types'

export const BarChartPropTypes = {
    selectedChild: propTypes.string.isRequired,
    selectedPhase: propTypes.string.isRequired,
}

export type ApiSend = { _idChildren: string; _idPhase: string }

export const BarChartDefaultProps = {}

export type BarChartProps = propTypes.InferProps<typeof BarChartPropTypes>
