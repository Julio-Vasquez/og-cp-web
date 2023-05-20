import { Form, Input, Select, DatePicker, DatePickerProps, Spin } from 'antd'

import { SelectTypeDoc } from '../../../SelectTypeDoc/SelectTypeDoc'

import useIntl from '../../../../hooks/useIntl'
import {
    availableDataTypes,
    signUpGenders,
} from '../../../../Views/Public/Signup/signup.types'

const { Item } = Form

import './PersonalInformation2.scss'
import CustomInput from '../../../Fields/CustomInput/CustomInput'

const PersonalInformation2 = ({ typeDocuments, genders, loading }: any) => {
    const { formatMessage } = useIntl()

    const onChangeGender = (value: string) => {
        console.log(`selected ${value}`)
    }

    const onChangeBirthDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString)
    }

    return (
        <div className='personalInformation2'>
            <Spin spinning={loading}>
                <Item rules={[{ required: true }]} name={['typeDocument', 'number']}>
                    <CustomInput
                        data={typeDocuments}
                        name={['typeDocument', 'abbr']}
                        customMap={{
                            value: 'abbr',
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
                        onChange={onChangeBirthDate}
                        className='personalInformation2__date'
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
                        onChange={onChangeGender}
                        allowClear
                        options={genders?.map((item: signUpGenders) => ({
                            value: item.gender,
                            label: item.gender,
                        }))}
                    />
                </Item>

                <Item
                    name='phoneNumber'
                    rules={[{ required: true, message: 'Please phone number!' }]}
                    className='personalInformation2__item'
                >
                    <Input
                        type='number'
                        placeholder={formatMessage({ id: 'texts.phone' })}
                        className='personalInformation2__input'
                    />
                </Item>
            </Spin>
        </div>
    )
}

export default PersonalInformation2
