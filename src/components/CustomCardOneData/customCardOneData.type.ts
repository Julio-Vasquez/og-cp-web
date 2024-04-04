import propTypes from 'prop-types'
export const CustomCardOneDataPropTypes = {
    pString: propTypes.string.isRequired,
    spanString: propTypes.string.isRequired,
    styles: propTypes.string,
}
export const CustomCardOneDataDefaultProps = {
    pString: '',
    spanString: '',
}

export type CustomCardOneDataProps = propTypes.InferProps<
    typeof CustomCardOneDataPropTypes
>
