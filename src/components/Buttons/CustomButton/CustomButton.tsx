import { FC } from 'react'
import { Button } from 'antd'

import { CustomButtonPropTypes, type CustomButtonProps } from './customInput.type'

import './CustomInput.scss'

export const CustomButton: FC<CustomButtonProps> = ({
  htmlType,
  type,
  loading,
  children,
  onClick,
  disable,
  width,
  hight,
}) => (
  <div className='main-custom-button'>
    <Button
      style={{ width: `${width}`, height: `${hight}` }}
      className='main-custom-button__custom-button'
      htmlType={htmlType}
      loading={loading!}
      type={type}
      onClick={onClick!}
      disabled={disable!}
    >
      {children}
    </Button>
  </div>
)

CustomButton.propTypes = CustomButtonPropTypes

export default CustomButton
