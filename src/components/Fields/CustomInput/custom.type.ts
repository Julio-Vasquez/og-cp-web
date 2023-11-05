import propTypes from 'prop-types'

export const CustomInputPropTypes = {
    data: propTypes.arrayOf(propTypes.any.isRequired).isRequired,
    name: propTypes.oneOfType([
        propTypes.string.isRequired,
        propTypes.arrayOf(propTypes.string.isRequired).isRequired,
    ]).isRequired,
    customMap: propTypes.shape({
        value: propTypes.string.isRequired,
        label: propTypes.string.isRequired,
    }).isRequired,
    props: propTypes.shape({
        value: propTypes.oneOfType([
            propTypes.string.isRequired,
            propTypes.number.isRequired,
            propTypes.bool.isRequired,
        ]).isRequired,
        id: propTypes.string.isRequired,
        onChange: propTypes.func.isRequired,
        'aria-required': propTypes.string.isRequired,
    }),
}

export const CustomInputDefaultProps = {}

export type CustomInputProps = propTypes.InferProps<typeof CustomInputPropTypes>
