<<<<<<< HEAD
import { Form, Input, Select, DatePicker, DatePickerProps } from 'antd'
=======
import { Form, Input, Select, DatePicker, DatePickerProps, Spin } from 'antd'

import { SelectTypeDoc } from '../../../SelectTypeDoc/SelectTypeDoc'
>>>>>>> feat/custom-input

import useIntl from '../../../../hooks/useIntl'
import { SelectTypeDoc } from '../../../SelectTypeDoc/SelectTypeDoc'
import {
    availableDataTypes,
    SignUpGenders,
} from '../../../../Views/Public/SignUp/SignUp.types'

const { Item } = Form

import './PersonalInformation2.scss'
import CustomInput from '../../../Fields/CustomInput/CustomInput'

const PersonalInformation2 = ({ typeDocuments, genders, loading }: any) => {
    const { formatMessage } = useIntl()

<<<<<<< HEAD
    const { data: availableData, loading: loadingAvailableData } =
        useGet<availableDataTypes>(
            { functionFetch: api.defaultData.availableData },
            {}
        )

    const onChangeGender = (value: string) => {}
    const onChangeBirthDate: DatePickerProps['onChange'] = (date, dateString) => {}

    return (
        <div className='personalInformation2'>
            <SelectTypeDoc />
            <Item
                className='personalInformation2__item'
                name='birthDate'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputBirthDate' }),
                    },
                ]}
            >
                <DatePicker
                    onChange={onChangeBirthDate}
                    className='personalInformation2__date'
                    placeholder={formatMessage({ id: 'texts.birthDate' })}
                />
            </Item>
            <Item
                className='personalInformation2__item'
                name='gender'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputGender' }),
                    },
                ]}
            >
                <Select
                    bordered={false}
                    className='personalInformation2__option'
                    placeholder={formatMessage({ id: 'texts.gender' })}
                    onChange={onChangeGender}
                    allowClear
                    options={availableData?.payload?.genders?.map(
                        (item: SignUpGenders) => ({
                            value: item.gender,
                            label: item.gender,
                        })
                    )}
                />
            </Item>
            <Item
                name='phoneNumber'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputPhoneNumber' }),
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
=======
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
>>>>>>> feat/custom-input
        </div>
    )
}

export default PersonalInformation2
