import propTypes from 'prop-types'

export const ShapeLiquidPropTypes = {
    key: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    percent: propTypes.number.isRequired,
}

export const ShapeLiquidDefaultProps = {}

export type ShapeLiquidProps = propTypes.InferProps<typeof ShapeLiquidPropTypes>
