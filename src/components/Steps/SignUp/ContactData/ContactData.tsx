import dayjs from 'dayjs'
import { FC } from 'react'
import type { RangePickerProps } from 'antd/es/date-picker'
import { Form, Input, Select, DatePicker, Spin } from 'antd'

import CustomInput from '../../../Fields/CustomInput/CustomInput'

import useIntl from '../../../../hooks/useIntl'
import { ContactDataProps } from './ContactData.type'
import { SignUpGenders } from '../../../../views/Public/SignUp/signUp.types'

const { Item } = Form

import './ContactData.scss'

const ContactData: FC<ContactDataProps> = ({ typeDocuments, genders, loading }) => {
    const { formatMessage } = useIntl()

    const disabledDate: RangePickerProps['disabledDate'] = current => {
        return current && current >= dayjs().endOf('day')
    }

    return (
        <div className='personalInformation2'>
            <Spin spinning={loading}>
                <Item rules={[{ required: true }]} name={'identification'}>
                    <CustomInput
                        data={typeDocuments}
                        name={'typeDocument'}
                        customMap={{
                            value: 'typeDocument',
                            label: 'typeDocument',
                        }}
                    />
                </Item>
                <Item
                    className='personalInformation2__item'
                    name='birthDate'
                    rules={[{ required: true, message: 'Please birthDate!' }]}
                >
                    <DatePicker
                        className='personalInformation2__date'
                        disabledDate={disabledDate}
                    />
                </Item>
                <Item
                    className='personalInformation2__item'
                    name='gender'
                    rules={[{ required: true, message: 'Please gender!' }]}
                >
                    <Select
                        bordered={false}
                        className='personalInformation2__option'
                        placeholder={formatMessage({ id: 'texts.gender' })}
                        allowClear
                        options={genders?.map((item: SignUpGenders) => ({
                            value: item.gender,
                            label: item.gender,
                        }))}
                    />
                </Item>
                <Item
                    name='phoneNumber'
                    rules={[
                        {
                            required: true,
                            message: 'Please phone number!',
                            max: 10,
                            min: 10,
                        },
                    ]}
                    className='personalInformation2__item'
                >
                    <Input
                        type='number'
                        placeholder={formatMessage({ id: 'texts.phoneNumber' })}
                        className='personalInformation2__input'
                    />
                </Item>
            </Spin>
        </div>
    )
}

export default ContactData
