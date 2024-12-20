import { FC } from 'react'
import { Form, Input, Spin } from 'antd'

import useIntl from '../../../hooks/useIntl'
import { type Loading } from '../../../utils/types/generics.type'
import {
  maxLength,
  minLength,
  textField,
  requiredField,
} from '../../../utils/functions/form.functions'

import './PersonalInformation.scss'

const { Item } = Form

export const PersonalInformation: FC<Loading> = ({ loading }) => {
  const { formatMessage } = useIntl()

  return (
    <div className='personalInformation'>
      <Spin spinning={loading}>
        <Item
          name='name'
          hasFeedback
          rules={[
            requiredField({ field: 'text.firstName' }),
            maxLength({ field: 'text.firstName', max: 50 }),
            minLength({ field: 'text.firstName', min: 3 }),
            textField(),
          ]}
          className='personalInformation__item'
        >
          <Input
            placeholder={formatMessage({ id: 'text.firstName' })}
            className='personalInformation__input'
          />
        </Item>
        <Item
          name='middleName'
          hasFeedback
          className='personalInformation__item'
          rules={[
            minLength({ field: 'text.middleName', min: 3 }),
            maxLength({ field: 'text.middleName', max: 55 }),
            textField(),
          ]}
        >
          <Input
            placeholder={formatMessage({ id: 'text.middleName' })}
            className='personalInformation__input'
          />
        </Item>
        <Item
          name='lastNameOne'
          hasFeedback
          rules={[
            requiredField({ field: 'text.firstLastName' }),
            maxLength({ field: 'text.firstLastName', max: 60 }),
            minLength({ field: 'text.firstLastName', min: 3 }),
            textField(),
          ]}
          className='personalInformation__item'
        >
          <Input
            className='personalInformation__input'
            placeholder={formatMessage({ id: 'text.firstLastName' })}
          />
        </Item>
        <Item
          name='lastNameTwo'
          hasFeedback
          className='personalInformation__item'
          rules={[
            requiredField({ field: 'text.middleLastName' }),
            maxLength({ field: 'text.middleLastName', max: 65 }),
            minLength({ field: 'text.middleLastName', min: 3 }),
            textField(),
          ]}
        >
          <Input
            placeholder={formatMessage({ id: 'text.middleLastName' })}
            className='personalInformation__input'
          />
        </Item>
      </Spin>
    </div>
  )
}

export default PersonalInformation
