import propTypes from 'prop-types'
export const CustomGroupPaintPropTypes = {
    pString: propTypes.string.isRequired,
    spanString: propTypes.string.isRequired,
}
export const CustomGroupPaintDefaultProps = {
    pString: '',
    spanString: '',
}

export type CustomGroupPaintProps = propTypes.InferProps<
    typeof CustomGroupPaintPropTypes
>
