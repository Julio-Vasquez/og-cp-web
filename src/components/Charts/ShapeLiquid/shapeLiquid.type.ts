import propTypes, { shape } from 'prop-types'

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
        styleSheet: propTypes.shape({
            brandColor: propTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
}

export const ShapeLiquidDefaultProps = {}

export type ShapeProps = propTypes.InferProps<typeof ShapeLiquidPropTypes>
