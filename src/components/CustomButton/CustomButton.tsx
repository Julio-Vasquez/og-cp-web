import { FC } from 'react'
import { Button } from 'antd'

import { CustomButtonProps } from './customInput.type'

import './CustomInput.scss'

export const CustomButton: FC<CustomButtonProps> = ({
    htmlType,
    type,
    loading,
    children,
}) => {
    return (
        <Button
            className='custom-button'
            htmlType={htmlType}
            loading={loading}
            type={type}
        >
            {children}
        </Button>
    )
}
