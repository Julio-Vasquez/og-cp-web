import { Form, Input, Select, DatePicker, DatePickerProps, Space } from 'antd'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useGet } from '../../../hooks/api'
import {
    availableDataTypes,
    signUpGenders,
    signUpTypeDocument,
} from '../../../Views/Public/Signup/signup.types'

import './PersonalInformation.scss'

const { Item } = Form
const PersonalInformation = () => {
    const { formatMessage } = useIntl()

    const { data: availableData, loading: loadingAvailableData } =
        useGet<availableDataTypes>(
            { functionFetch: api.defaultData.availableData },
            {}
        )

    const onChangeGender = (value: string) => {
        console.log(`selected ${value}`)
    }
    const onChangeTypeDoc = (value: string) => {
        console.log(`selected ${value}`)
    }

    const onChangeBirthDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString)
    }

    return (
        <div className='main'>
            <div className='main__section'>
                <Item
                    name='name'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your first name!',
                        },
                    ]}
                    className='main__item'
                >
                    <Input placeholder='first name' className='main__input' />
                </Item>
                <Item name='middleName' className='main__item'>
                    <Input placeholder='second name' className='main__input' />
                </Item>
            </div>
            <div className='main__section'>
                <Item
                    name='lastNameOne'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your lastName!',
                        },
                    ]}
                    className='main__item'
                >
                    <Input placeholder='lastname one' className='main__input' />
                </Item>
                <Item name='lastNameTwo' className='main__item'>
                    <Input placeholder='lastname two' className='main__input' />
                </Item>
            </div>
            <div className='main__section'>
                <Item
                    className='main__item'
                    name='gender'
                    rules={[
                        { required: true, message: 'Please input your gender!' },
                    ]}
                >
                    <Select
                        bordered={false}
                        className='main__option'
                        placeholder='Select gender'
                        onChange={onChangeGender}
                        allowClear
                        options={availableData?.payload?.genders?.map(
                            (item: signUpGenders) => ({
                                value: item.gender,
                                label: item.gender,
                            })
                        )}
                    />
                </Item>
                <Item
                    className='main__item'
                    name='birthDate'
                    rules={[
                        { required: true, message: 'Please input your birthDate!' },
                    ]}
                >
                    <DatePicker
                        onChange={onChangeBirthDate}
                        className='main__date'
                    />
                </Item>
            </div>

            <Space.Compact className='compac'>
                <Item
                    className='compac__select'
                    name='typeDocument'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your type document!',
                        },
                    ]}
                >
                    <Select
                        placeholder='T.D'
                        className='compac__type-doc'
                        options={availableData?.payload?.typeDocuments?.map(
                            (item: signUpTypeDocument) => ({
                                value: item.typeDocument,
                            })
                        )}
                    />
                </Item>
                <Item
                    className='compac__item'
                    name='identification'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your number indetification!',
                        },
                    ]}
                >
                    <Input
                        type='number'
                        placeholder='Number Document'
                        className='main__input'
                    />
                </Item>
            </Space.Compact>

            <div className='main__item'>
                <Item
                    name='phoneNumber'
                    rules={[
                        {
                            required: true,
                            message: 'Please input your phone number!',
                        },
                    ]}
                    className='main__item'
                >
                    <Input
                        type='number'
                        placeholder={'phone number'}
                        className='main__input'
                    />
                </Item>
            </div>
        </div>
    )
}

export default PersonalInformation
