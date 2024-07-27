import propTypes from 'prop-types'

export const AreaChartPropTypes = {
    selectedChild: propTypes.string.isRequired,
}

export type AreaChartMutation = {
    _idChildren: string
}

export type AreaChartResponse = { qty: string | number; day: string }

export const AreaChartDefaultProps = {}
export type AreaChartProps = propTypes.InferProps<typeof AreaChartPropTypes>
