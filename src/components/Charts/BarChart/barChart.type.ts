import propTypes from 'prop-types'

export const BarChartPropTypes = {
    selectedChild: propTypes.string.isRequired,
    selectedPhase: propTypes.string.isRequired,
}

export type BarChartMutation = { _idChildren: string; _idPhase: string }

type Progress = {
    activity: string
    pctCompleted: number
}

export type BarChartResponse = {
    phase: string
    progress: Progress[]
}

export const BarChartDefaultProps = {}

export type BarChartProps = propTypes.InferProps<typeof BarChartPropTypes>
