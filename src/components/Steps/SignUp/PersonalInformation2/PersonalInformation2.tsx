import { Form, Input, Select, DatePicker, DatePickerProps, Space } from 'antd'

import { SelectTypeDoc } from '../../../SelectTypeDoc/SelectTypeDoc'

import api from '../../../../api'
import { useGet } from '../../../../hooks/api'
import useIntl from '../../../../hooks/useIntl'
import {
    availableDataTypes,
    signUpGenders,
} from '../../../../Views/Public/Signup/signup.types'

const { Item } = Form

import './PersonalInformation2.scss'

const PersonalInformation2 = () => {
    const { formatMessage } = useIntl()

    const { data: availableData, loading: loadingAvailableData } =
        useGet<availableDataTypes>(
            { functionFetch: api.defaultData.availableData },
            {}
        )

    const onChangeGender = (value: string) => {
        console.log(`selected ${value}`)
    }

    const onChangeBirthDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString)
    }

    return (
        <div className='personalInformation2'>
            <SelectTypeDoc />
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
                    options={availableData?.payload?.genders?.map(
                        (item: signUpGenders) => ({
                            value: item.gender,
                            label: item.gender,
                        })
                    )}
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
        </div>
    )
}

export default PersonalInformation2
