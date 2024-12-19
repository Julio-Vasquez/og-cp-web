import dayjs from 'dayjs'
import { useEffect } from 'react'
import { Button, DatePicker, Form, Input, Spin, Card } from 'antd'

import { RolTag } from '../../../components/Tags/RolTag'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation, useQuery } from '../../../hooks/api'
import { Status } from '../../../utils/constants/status.enum'
import { DataUser } from '../../../utils/types/userData.type'
import { DATE_FORMAT } from '../../../utils/constants/date.constant'
import { ApiResponseSuccess } from '../../../utils/types/response.type'
import { successNotification } from '../../../utils/notifications/notification.action'
import {
  maxLength,
  minLength,
  requiredField,
  textField,
} from '../../../utils/functions/form.functions'

import './Profile.scss'

const { Item, useForm } = Form

export const Profile = () => {
  const [form] = useForm()
  const { formatMessage } = useIntl()
  const {
    data: me,
    loading,
    refetch,
  } = useQuery<DataUser>({
    functionFetch: api.user.userMe,
  })

  const payload = me.status === Status.success ? me.payload : ({} as DataUser)
  const hiddenMiddleName = payload.middleName === '' ?? true
  const title = formatMessage({
    id: 'title.editObj',
    objVars: { obj: formatMessage({ id: 'text.profile' }) },
  })

  const onCompleted = ({ data }: ApiResponseSuccess) => {
    successNotification(`Update successful ${data.message}`)
    refetch()
  }

  const [mutation] = useMutation<DataUser>(
    { functionFetch: api.user.updateProfile },
    { onCompleted }
  )

  const onFinish = (values: DataUser) => {
    mutation<DataUser>({
      ...values,
      birthDate: dayjs(values.birthDate).format(DATE_FORMAT),
    })
  }

  useEffect(() => {
    form.setFieldsValue({ ...payload, birthDate: dayjs(payload.birthDate) })
  }, [payload])

  return (
    <Card className='profile'>
      <Spin spinning={loading}>
        <Form layout='vertical' onFinish={onFinish} form={form}>
          <h2 className='profile__title'>{title}</h2>
          <div className='profile__content'>
            <Item
              label={formatMessage({ id: 'text.firstName' })}
              name='name'
              rules={[
                requiredField({ field: 'text.firstName' }),
                maxLength({ field: 'text.firstName', max: 50 }),
                minLength({ field: 'text.firstName', min: 3 }),
                textField(),
              ]}
              hasFeedback
            >
              <Input />
            </Item>
            <Item
              label={formatMessage({ id: 'text.middleName' })}
              name='middleName'
              rules={[
                minLength({ field: 'text.middleName', min: 3 }),
                maxLength({ field: 'text.middleName', max: 55 }),
                textField(),
              ]}
              hidden={hiddenMiddleName}
              hasFeedback
            >
              <Input />
            </Item>
          </div>
          <div className='profile__content'>
            <Item
              label={formatMessage({ id: 'text.firstLastName' })}
              name='lastNameOne'
              rules={[
                requiredField({ field: 'text.firstLastName' }),
                maxLength({ field: 'text.firstLastName', max: 60 }),
                minLength({ field: 'text.firstLastName', min: 3 }),
                textField(),
              ]}
              hasFeedback
            >
              <Input />
            </Item>
            <Item
              label={formatMessage({ id: 'text.middleLastName' })}
              name='lastNameTwo'
              rules={[
                requiredField({ field: 'text.middleLastName' }),
                maxLength({ field: 'text.middleLastName', max: 65 }),
                minLength({ field: 'text.middleLastName', min: 3 }),
                textField(),
              ]}
              hasFeedback
            >
              <Input />
            </Item>
          </div>
          <div className='profile__content'>
            <Item
              label={formatMessage({ id: 'text.username' })}
              name='username'
              hasFeedback
            >
              <Input disabled />
            </Item>
            <Item
              label={formatMessage({ id: 'text.birthDate' })}
              name='birthDate'
              rules={[requiredField({ field: 'text.birthDate' })]}
              hasFeedback
            >
              <DatePicker format={DATE_FORMAT} className='profile__birth-date' />
            </Item>
          </div>
          <div className='profile__content'>
            <Item
              name='phoneNumber'
              label={formatMessage({ id: 'text.phoneNumber' })}
              rules={[
                requiredField({ field: 'text.phoneNumber' }),
                maxLength({ field: 'text.phoneNumber', max: 10 }),
                minLength({ field: 'text.phoneNumber', min: 10 }),
              ]}
              hasFeedback
            >
              <Input type='number' />
            </Item>
            <Item name='role' label={formatMessage({ id: 'text.role' })}>
              <RolTag />
            </Item>
          </div>
          <Item label={formatMessage({ id: 'text.mail' })} name='mail' hasFeedback>
            <Input disabled />
          </Item>
          <div className='profile__submit'>
            <Button type='primary' htmlType='submit'>
              {formatMessage({
                id: 'button.saveObj',
                objVars: {
                  obj: formatMessage({ id: 'button.changes' }),
                },
              })}
            </Button>
          </div>
        </Form>
      </Spin>
    </Card>
  )
}

export default Profile
