import propTypes from 'prop-types'
export const AreaChartPropTypes = {
    selectedChild: propTypes.string.isRequired,
    /*     data: propTypes.shape({
        type: propTypes.string.isRequired,
        value: propTypes.string.isRequired,
        transform: propTypes.arrayOf(
            propTypes.shape({
                type: propTypes.string.isRequired,
                callback: propTypes.func.isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
    xField: propTypes.func.isRequired,
    yField: propTypes.string.isRequired,
    style: propTypes.shape({ fill: propTypes.string.isRequired }).isRequired,
    axis: propTypes.shape({
        y: propTypes.shape({ labelFormatter: propTypes.string.isRequired })
            .isRequired,
    }).isRequired,
    line: propTypes.shape({
        style: propTypes.shape({
            stroke: propTypes.string.isRequired,
            strokeWidth: propTypes.number.isRequired,
        }).isRequired,
    }).isRequired, */
}

export const AreaChartDefaultProps = {}
export type AreaChartProps = propTypes.InferProps<typeof AreaChartPropTypes>
