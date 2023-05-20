import { Input, Select, Form } from 'antd'

import { TypeDocumentsType } from './custom.type'
import './CustomInput.scss'
import { reduceString } from '../../../utils/types/string.util'
import { FC } from 'react'

const { Item } = Form

/**
 * params
 * @param {name} string Contains the names under which the object will be created. Example => 'number'
 * @param {props} object Is an object that receives the following fields from the Item:  { value, id, onChange, aria-required }
 * @param {customMap} object Is an object with this structure : {  value, label}
 * *
 */

type CustomMap = {
    value: string | number
    label: string | number
}

type ItemProps = {
    value: string | number | boolean
    id: string
    onChange: Function
    'aria-required': string
}

type Props = {
    data: any
    name: string | string[]
    customMap: CustomMap
    props?: ItemProps
}

const CustomInput: FC<Props> = ({ data, name, customMap, ...props }) => {
    console.log(props)

    const CustomSelect = () => {
        return (
            <Item
                noStyle
                rules={[{ required: !!props?.props?.['aria-required'] }]}
                name={name}
            >
                <Select
                    placeholder='Select'
                    style={{ width: 120 }}
                    options={data.map((item: any) => ({
                        value: item[customMap.value],
                        label: item[customMap.label],
                    }))}
                />
            </Item>
        )
    }

    return <Input {...props} addonBefore={<CustomSelect />} />
}

export default CustomInput
