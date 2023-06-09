import { FC } from 'react'
import { Form, Input, Select } from 'antd'

import {
    availableDataTypes,
    SignUpTypeDocument,
} from '../../Views/Public/SignUp/SignUp.types'

import api from '../../api'
import { useGet } from '../../hooks/api'
import useIntl from '../../hooks/useIntl'

import './SelectTypeDoc.scss'

const { Item } = Form

export const SelectTypeDoc = () => {
    const { formatMessage } = useIntl()
    const onChangeTypeDoc = (value: string) => {
        console.log(`selected ${value}`)
    }

    const { data: availableData, loading: loadingAvailableData } =
        useGet<availableDataTypes>(
            { functionFetch: api.defaultData.availableData },
            {}
        )

    const prefixSelector = (
        <Item name={'typDocument'} noStyle>
            <Select
                bordered={false}
                className='select-type-doc__select'
                onChange={onChangeTypeDoc}
                placeholder={formatMessage({ id: 'texts.typeDocument' })}
                options={availableData?.payload?.typeDocuments?.map(
                    (item: SignUpTypeDocument) => ({
                        value: item.typeDocument,
                    })
                )}
            />
        </Item>
    )

    return (
        <div className='select-type-doc'>
            <Item
                className='select-type-doc__item'
                name='identification'
                rules={[
                    { required: true, message: 'Please input your phone number!' },
                ]}
            >
                <Input
                    addonBefore={prefixSelector}
                    className='select-type-doc__input'
                    bordered={false}
                />
            </Item>
        </div>
    )
}

export default SelectTypeDoc
