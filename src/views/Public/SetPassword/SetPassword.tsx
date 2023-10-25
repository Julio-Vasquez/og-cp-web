import { Button, Form, Input } from 'antd'
import { useParams } from 'react-router-dom'
import { Error } from '../../../components/Token/Error/Error'

import loginImg from '../../../assets/img/publicBackground.jpg'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { ValidateToken } from '../../../utils/storage/storage'
import { successNotification } from '../../../utils/notifications/notification.action'
import { LockOutlined, StarOutlined, UserOutlined } from '@ant-design/icons'

const { Item } = Form
const { Password } = Input
import './SetPassword.scss'

const SetPassword = () => {
    const { token } = useParams()

    const { formatMessage } = useIntl()

    const validateToken = ValidateToken(token ? token : '')

    if (!validateToken) return <Error />

    const onFinish = () => {}

    return (
        <div className='set-password'>
            <div className='set-password__container'>
                <img
                    className='set-password__image-container'
                    src={loginImg}
                    alt='image'
                />
                <Form
                    className='set-password__form-data'
                    name='normal_set-password'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <LockOutlined className='set-password__icon' />
                    <div className='start'>
                        <div className='start__lines'></div>
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__lines'></div>
                    </div>
                    <h2 className='set-password__title'>
                        {formatMessage({ id: 'texts.assignNewPassword' })}
                    </h2>

                    <Item
                        name='username'
                        className='set-password__item'
                        rules={[
                            {
                                required: true,
                                message: formatMessage({
                                    id: 'texts.inputNewPassword',
                                }),
                            },
                        ]}
                    >
                        <Password
                            className='set-password__input'
                            placeholder={formatMessage({
                                id: 'texts.newPassword',
                            })}
                        />
                    </Item>
                    <Item
                        name='username'
                        className='set-password__item'
                        rules={[
                            {
                                required: true,
                                message: formatMessage({
                                    id: 'texts.inputNewPassword',
                                }),
                            },
                        ]}
                    >
                        <Password
                            className='set-password__input'
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder={formatMessage({ id: 'texts.username' })}
                        />
                    </Item>
                    <Button
                        className='set-password__submit-form'
                        type='primary'
                        htmlType='submit'
                    >
                        {formatMessage({ id: 'button.send' })}
                    </Button>
                </Form>
            </div>
            <Button> {formatMessage({ id: 'button.send' })} </Button>
        </div>
    )
}

export default SetPassword
