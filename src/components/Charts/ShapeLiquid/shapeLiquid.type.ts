import propTypes from 'prop-types'

export const ShapeLiquidPropTypes = {
    str: propTypes.string.isRequired,

    percent: propTypes.number.isRequired,
    style: propTypes.shape({
        shape: propTypes.func.isRequired,
    }).isRequired,
    outLineBorder: propTypes.number.isRequired,
    outLineDistance: propTypes.number.isRequired,
    waveLength: propTypes.number.isRequired,
}

export const ShapeLiquidDefaultProps = {}

export type ShapeProps = propTypes.InferProps<typeof ShapeLiquidPropTypes>
