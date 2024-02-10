import propTypes from 'prop-types'

export const CustomButtonPropTypes = {
    type: propTypes.any.isRequired,
    htmlType: propTypes.any.isRequired,
    children: propTypes.any.isRequired,
    loading: propTypes.bool.isRequired,
}

export const CustomButtonDefaultProps = {}

export type CustomButtonProps = propTypes.InferProps<typeof CustomButtonPropTypes>
