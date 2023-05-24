import { FC } from 'react'
import { Input, Select, Form } from 'antd'

import {
    CustomInputProps,
    CustomInputDefaultProps,
    CustomInputPropTypes,
} from './custom'
import './CustomInput.scss'

const { Item } = Form

/**
 * params
 * @param {name} string Contains the names under which the object will be created. Example => 'number'
 * @param {props} object Is an object that receives the following fields from the Item:  { value, id, onChange, aria-required }
 * @param {customMap} object Is an object with this structure : {  value, label}
 * *
 */

const CustomInput: FC<CustomInputProps> = ({ data, name, customMap, ...props }) => {
    const CustomSelect = () => {
        return (
            <Item
                noStyle
                rules={[{ required: !!props?.props?.['aria-required'] }]}
                name={name}
            >
                <Select
                    className='custom-input__prefix'
                    placeholder='Select'
                    options={data.map((item: any) => ({
                        value: item[customMap.value],
                        label: item[customMap.label],
                    }))}
                />
            </Item>
        )
    }

    return (
        <Input className='custom-input' {...props} addonBefore={<CustomSelect />} />
    )
}

CustomInput.propTypes = CustomInputPropTypes
CustomInput.defaultProps = CustomInputDefaultProps

export default CustomInput
