import { FC } from 'react'
import { Button, ColorPicker, Form } from 'antd'
import { ThemeData, ThemeDataDefault } from './themeSelector.type'
import { Color } from 'antd/es/color-picker'
import { useForm } from 'antd/es/form/Form'

export const ThemeSelector: FC<ThemeData> = ({ setData }) => {
    const [form] = useForm()
    const { Item } = Form

    const handleValues = (changedValues: any, allValues: any) => {
        const colorObj = changedValues?.colorPrimary
            ? {
                  colorPrimary: (allValues?.colorPrimary as Color)?.toHexString(),
              }
            : {}

        setData({
            ...allValues,
            ...colorObj,
        })
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
