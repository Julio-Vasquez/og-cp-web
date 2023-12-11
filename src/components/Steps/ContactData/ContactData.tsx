import dayjs from 'dayjs'
import { FC } from 'react'
import type { RangePickerProps } from 'antd/es/date-picker'
import { Form, Input, Select, DatePicker, Spin } from 'antd'

import CustomInput from '../../Fields/CustomInput/CustomInput'

import {
    ContactDataDefaultProps,
    ContactDataProps,
    ContactDataPropTypes,
} from './ContactData.type'
import useIntl from '../../../hooks/useIntl'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'
import { SignUpGenders } from '../../../views/Public/SignUp/signUp.types'

import './ContactData.scss'

const { Item } = Form

export const ContactData: FC<ContactDataProps> = ({
    typeDocuments,
    genders,
    loading,
}) => {
    const { formatMessage } = useIntl()

    const sortedTypeDocument = typeDocuments.sort((a, b) =>
        a!.abbr.localeCompare(b!.abbr)
    )

    const disabledDate: RangePickerProps['disabledDate'] = current => {
        return current && current >= dayjs().endOf('day')
    }

    return (
        <div className='main-contactData'>
            <Spin spinning={loading}>
                <Item
                    hasFeedback
                    name='identification'
                    rules={[
                        requiredField({ field: 'text.typeDocument' }),
                        maxLength({ field: 'text.typeDocument', max: 14 }),
                        minLength({ field: 'text.typeDocument', min: 6 }),
                    ]}
                >
                    <CustomInput
                        data={sortedTypeDocument}
                        name={'typeDocument'}
                        customMap={{
                            value: 'typeDocument',
                            label: 'typeDocument',
                        }}
                    />
                </Item>
                <Item
                    hasFeedback
                    name='birthDate'
                    className='main-contactData__item'
                    rules={[requiredField({ field: 'text.birthDate' })]}
                >
                    <DatePicker
                        className='main-contactData__date'
                        disabledDate={disabledDate}
                    />
                </Item>
                <Item
                    hasFeedback
                    name='gender'
                    className='main-contactData__item'
                    rules={[requiredField({ field: 'text.gender' })]}
                >
                    <Select
                        allowClear
                        bordered={false}
                        className='main-contactData__option'
                        placeholder={formatMessage({ id: 'text.gender' })}
                        options={genders?.sort()?.map((item: SignUpGenders) => ({
                            value: item.gender,
                            label: item.gender,
                        }))}
                    />
                </Item>
                <Item
                    hasFeedback
                    name='phoneNumber'
                    rules={[
                        requiredField({ field: 'text.phoneNumber' }),
                        maxLength({ field: 'text.phoneNumber', max: 10 }),
                        minLength({ field: 'text.phoneNumber', min: 10 }),
                    ]}
                    className='main-contactData__item'
                >
                    <Input
                        type='number'
                        placeholder={formatMessage({ id: 'text.phoneNumber' })}
                        className='main-contactData__input'
                    />
                </Item>
            </Spin>
        </div>
    )
}

ContactData.propTypes = ContactDataPropTypes
ContactData.defaultProps = ContactDataDefaultProps

export default ContactData
