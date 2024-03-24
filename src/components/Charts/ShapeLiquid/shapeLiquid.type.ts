import propTypes from 'prop-types'

export const ShapeLiquidPropTypes = {
    name: propTypes.string.isRequired,
    percent: propTypes.number.isRequired,
}

export const ShapeLiquidDefaultProps = {}

export type ShapeLiquidProps = propTypes.InferProps<typeof ShapeLiquidPropTypes>
