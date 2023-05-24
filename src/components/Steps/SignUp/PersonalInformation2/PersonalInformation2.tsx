import { Form, Input, Select, DatePicker, DatePickerProps } from 'antd'

import api from '../../../../api'
import { useGet } from '../../../../hooks/api'
import useIntl from '../../../../hooks/useIntl'
import { SelectTypeDoc } from '../../../SelectTypeDoc/SelectTypeDoc'
import {
    availableDataTypes,
    SignUpGenders,
} from '../../../../Views/Public/SignUp/SignUp.types'

const { Item } = Form

import './PersonalInformation2.scss'

const PersonalInformation2 = () => {
    const { formatMessage } = useIntl()

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
        </div>
    )
}

export default PersonalInformation2
