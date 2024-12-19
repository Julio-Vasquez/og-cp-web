import propTypes from 'prop-types'

export const CustomButtonPropTypes = {
  type: propTypes.any,
  htmlType: propTypes.any,
  disable: propTypes.bool,
  loading: propTypes.bool,
  children: propTypes.any.isRequired,
  width: propTypes.string,
  hight: propTypes.string,
  onClick: propTypes.func,
}

export type CustomButtonProps = propTypes.InferProps<typeof CustomButtonPropTypes>
