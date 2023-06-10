import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined, StarOutlined } from '@ant-design/icons'

import loginImg from '../../../assets/img/publicBackground.jpg'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { forgotPassword } from './forgotPassword.type'
import { successNotification } from '../../../utils/notifications/notification.action'

import './ForgotPassword.scss'

const { Item } = Form

const ForgotPassword = () => {
    const { formatMessage } = useIntl()

    const onCompleted = ({ data }: any) => {
        successNotification(data.message)
    }

    const [mutation] = useMutation<forgotPassword>(
        { functionFetch: api.auth.forgotPassword },
        { onCompleted, cancelError: false }
    )

    const onFinish = (values: forgotPassword) => {
        mutation({ ...values })
    }

    return (
        <div className='forgot-password'>
            <div className='forgot-password__container'>
                <img
                    className='forgot-password__image-container'
                    src={loginImg}
                    alt='image'
                />
                <Form
                    className='forgot-password__form-data'
                    name='normal_forgot-password'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LockOutlined className='forgot-password__icon' />
                    <div className='start'>
                        <div className='start__lines'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__lines'></div>
                    </div>
                    <h2 className='forgot-password__title'>
                        {formatMessage({ id: 'title.forgotPassword' })}
                    </h2>
                    <Item
                        name='username'
                        className='forgot-password__item'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input
                            className='forgot-password__input'
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder={formatMessage({ id: 'texts.username' })}
                        />
                    </Item>
                    <Button
                        className='forgot-password__submit-form'
                        type='primary'
                        htmlType='submit'
                    >
                        {formatMessage({ id: 'button.send' })}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword
