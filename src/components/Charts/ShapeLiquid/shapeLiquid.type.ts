import propTypes from 'prop-types'

export const ShapeLiquidPropTypes = {
    str: propTypes.string.isRequired,

    percent: propTypes.number.isRequired,
    style: propTypes.shape({
        shape: propTypes.func.isRequired,
    }).isRequired,
    outLine: propTypes.shape({
        border: propTypes.number.isRequired,
        distance: propTypes.number.isRequired,
        style: propTypes.shape({
            stroke: propTypes.string.isRequired,
            strokeOpacity: propTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
    waveLength: propTypes.number.isRequired,
    theme: propTypes.shape({
        color: propTypes.string.isRequired,
    }).isRequired,
}

export const ShapeLiquidDefaultProps = {}

export type ShapeLiquidProps = propTypes.InferProps<typeof ShapeLiquidPropTypes>
