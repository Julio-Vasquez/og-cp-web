import dayjs from 'dayjs'
import { FC } from 'react'
import type { RangePickerProps } from 'antd/lib/date-picker'
import { Form, Input, Select, DatePicker, Spin } from 'antd'

import CustomInput from '../../Fields/CustomInput/CustomInput'

import useIntl from '../../../hooks/useIntl'
import { type LegalInformationProps } from './LegalInformation.type'
import { SignUpGenders } from '../../../views/Public/SignUp/signUp.types'
import {
  maxLength,
  minLength,
  requiredField,
} from '../../../utils/functions/form.functions'

import './LegalInformation.scss'

const { Item } = Form

export const LegalInformation: FC<LegalInformationProps> = ({
  typeDocuments = [],
  genders = [],
  loading,
}) => {
  const { formatMessage } = useIntl()

  const sortedTypeDocument = typeDocuments.sort((a, b) =>
    a!.abbr.localeCompare(b!.abbr)
  )

  const disabledDate: RangePickerProps['disabledDate'] = current =>
    current && current >= dayjs().subtract(17, 'year')

  const startDate = dayjs().subtract(17, 'year')

  return (
    <div className='contact-data'>
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
          className='contact-data__item'
          rules={[requiredField({ field: 'text.birthDate' })]}
        >
          <DatePicker
            className='contact-data__date'
            disabledDate={disabledDate}
            defaultPickerValue={startDate}
          />
        </Item>
        <Item
          hasFeedback
          name='gender'
          className='contact-data__item'
          rules={[requiredField({ field: 'text.gender' })]}
        >
          <Select
            allowClear
            className='contact-data__option'
            placeholder={formatMessage({ id: 'text.gender' })}
            options={genders.sort().map((item: SignUpGenders) => ({
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
          className='contact-data__item'
        >
          <Input
            defaultValue={3}
            type='number'
            placeholder={formatMessage({ id: 'text.phoneNumber' })}
            className='contact-data__input'
          />
        </Item>
      </Spin>
    </div>
  )
}

export default LegalInformation
