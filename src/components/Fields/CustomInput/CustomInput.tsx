import { FC } from 'react'
import { Input, Select, Form } from 'antd'

import useIntl from '../../../hooks/useIntl'
import { type CustomInputProps } from './custom.type'

import './CustomInput.scss'

const { Item } = Form

/**
 * params
 * @param {name} string Contains the names under which the object will be created. Example => 'number'
 * @param {props} object Is an object that receives the following fields from the Item:  { value, id, onChange, aria-required }
 * @param {customMap} object Is an object with this structure : {  value, label}
 * *
 */

export const CustomInput: FC<CustomInputProps> = ({
  data,
  name,
  customMap,
  ...props
}) => {
  const { formatMessage } = useIntl()
  const options = data.map((item: any) => ({
    value: item[customMap.value],
    label: item[customMap.label],
  }))

  const CustomSelect = () => (
    <Item
      noStyle
      rules={[{ required: !!props?.props?.['aria-required'] }]}
      name={name}
    >
      <Select
        className='custom-input__prefix'
        placeholder={formatMessage({ id: 'text.select' })}
        options={options}
      />
    </Item>
  )

  return <Input className='custom-input' addonBefore={<CustomSelect />} {...props} />
}

export default CustomInput
