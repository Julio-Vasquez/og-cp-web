import dayjs from 'dayjs'
import { FC } from 'react'
import type { RangePickerProps } from 'antd/es/date-picker'
import { Form, Input, Select, DatePicker, Spin } from 'antd'

import {
    ContactDataDefaultProps,
    ContactDataProps,
    ContactDataPropTypes,
} from './ContactData.type'
import CustomInput from '../../Fields/CustomInput/CustomInput'
import { SignUpGenders } from '../../../views/Public/SignUp/signUp.types'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'
import { formTranslate } from '../../../utils/functions/translation.function'

import './ContactData.scss'

const { Item } = Form

export const ContactData: FC<ContactDataProps> = ({
    typeDocuments,
    genders,
    loading,
}) => {
    const disabledDate: RangePickerProps['disabledDate'] = current => {
        return current && current >= dayjs().endOf('day')
    }
    return (
        <div className='main-contactData'>
            <Spin spinning={loading}>
                <Item
                    rules={[
                        requiredField({ field: 'text.typeDocument' }),
                        maxLength({ field: 'text.typeDocument', max: 14 }),
                        minLength({ field: 'text.typeDocument', min: 6 }),
                    ]}
                    name={'identification'}
                    hasFeedback
                >
                    <CustomInput
                        data={typeDocuments!}
                        name={'typeDocument'}
                        customMap={{
                            value: 'typeDocument',
                            label: 'typeDocument',
                        }}
                    />
                </Item>
                <Item
                    className='main-contactData__item'
                    name='birthDate'
                    hasFeedback
                    rules={[requiredField({ field: 'text.birthDate' })]}
                >
                    <DatePicker
                        className='main-contactData__date'
                        disabledDate={disabledDate}
                    />
                </Item>
                <Item
                    className='main-contactData__item'
                    name='gender'
                    hasFeedback
                    rules={[requiredField({ field: 'text.gender' })]}
                >
                    <Select
                        bordered={false}
                        className='main-contactData__option'
                        placeholder={formTranslate({ id: 'text.gender' })}
                        allowClear
                        options={genders?.map((item: SignUpGenders) => ({
                            value: item.gender,
                            label: item.gender,
                        }))}
                    />
                </Item>
                <Item
                    name='phoneNumber'
                    hasFeedback
                    rules={[
                        requiredField({ field: 'text.phoneNumber' }),
                        maxLength({ field: 'text.phoneNumber', max: 10 }),
                        minLength({ field: 'text.phoneNumber', min: 10 }),
                    ]}
                    className='main-contactData__item'
                >
                    <Input
                        type='number'
                        placeholder={formTranslate({ id: 'text.phoneNumber' })}
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
