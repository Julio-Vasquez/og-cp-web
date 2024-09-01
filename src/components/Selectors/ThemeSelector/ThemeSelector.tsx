import { FC } from 'react'
import { ColorPicker, Form } from 'antd'
import { Color } from 'antd/es/color-picker'

import { ThemeData, ThemeDataDefault } from './themeSelector.type'

const { Item, useForm } = Form

export const ThemeSelector: FC<ThemeData> = ({ setData }) => {
    const [form] = useForm()

    const handleValues = (changedValues: any, allValues: any) => {
        const colorObj = changedValues?.colorPrimary
            ? { colorPrimary: (allValues?.colorPrimary as Color)?.toHexString() }
            : {}
        setData({ ...allValues, ...colorObj })
    }

    return (
        <Form
            form={form}
            onValuesChange={handleValues}
            name='theme'
            initialValues={ThemeDataDefault}
        >
            <Item valuePropName='color' name='colorPrimary' label='Primary Color'>
                <ColorPicker />
            </Item>
        </Form>
    )
}

ThemeSelector.propTypes = ThemeData
ThemeSelector.defaultProps = ThemeDataDefault

export default ThemeSelector
