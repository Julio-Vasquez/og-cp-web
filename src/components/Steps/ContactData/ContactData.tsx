import dayjs from 'dayjs'
import { FC } from 'react'
import type { RangePickerProps } from 'antd/lib/date-picker'
import { Form, Input, Select, DatePicker, Spin } from 'antd'

import CustomInput from '../../Fields/CustomInput/CustomInput'

import useIntl from '../../../hooks/useIntl'
import { SignUpGenders } from '../../../views/Public/SignUp/signUp.types'
import {
    ContactDataDefaultProps,
    ContactDataProps,
    ContactDataPropTypes,
} from './ContactData.type'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'

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

    const disabledDate: RangePickerProps['disabledDate'] = current =>
        current && current >= dayjs().endOf('day')

    return (
        <div className='main-contact-data'>
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
                        name='typeDocument'
                        customMap={{ value: 'typeDocument', label: 'abbr' }}
                    />
                </Item>
                <Item
                    hasFeedback
                    name='birthDate'
                    className='main-contact-data__item'
                    rules={[requiredField({ field: 'text.birthDate' })]}
                >
                    <DatePicker
                        className='main-contact-data__date'
                        disabledDate={disabledDate}
                    />
                </Item>
                <Item
                    hasFeedback
                    name='gender'
                    className='main-contact-data__item'
                    rules={[requiredField({ field: 'text.gender' })]}
                >
                    <Select
                        allowClear
                        bordered={false}
                        className='main-contact-data__option'
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
                    className='main-contact-data__item'
                >
                    <Input
                        type='number'
                        placeholder={formatMessage({ id: 'text.phoneNumber' })}
                        className='main-contact-data__input'
                    />
                </Item>
            </Spin>
        </div>
    )
}

ContactData.propTypes = ContactDataPropTypes
ContactData.defaultProps = ContactDataDefaultProps

export default ContactData
