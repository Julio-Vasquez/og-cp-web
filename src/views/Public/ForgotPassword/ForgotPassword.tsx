import { Button, Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import Star from '../../../components/Star/Star'

import api from '../../../api'
import { useMutation } from '../../../hooks/api'
import { forgotPassword } from './forgotPassword.type'
import {
    successNotification,
    errorNotification,
} from '../../../utils/notifications/notification.action'
import loginImg from '../../../assets/img/publicBackground.jpg'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'
import { formTranslate } from '../../../utils/functions/translation.function'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'

import './ForgotPassword.scss'

const { Item } = Form

const ForgotPassword = () => {
    const navigate = useNavigate()

    const onCompleted = ({ data }: any) => {
        if (data.statusCode === 404) {
            errorNotification(data.message)
        } else {
            successNotification(data.message)
            navigate(RP.login)
        }
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
                    <Star />
                    <h2 className='forgot-password__title'>
                        {formTranslate({ id: 'title.forgotPassword' })}
                    </h2>
                    <p>
                        {formTranslate({
                            id: 'text.inputObj',
                            objVars: {
                                field: formTranslate({ id: 'text.username' }),
                            },
                        })}
                    </p>
                    <Item
                        name='username'
                        className='forgot-password__item'
                        rules={[
                            requiredField({ field: 'text.username' }),
                            maxLength({ field: 'text.username', max: 45 }),
                            minLength({ field: 'text.username', min: 4 }),
                        ]}
                    >
                        <Input
                            className='forgot-password__input'
                            prefix={<UserOutlined className='site-form-item-icon' />}
                            placeholder={formTranslate({ id: 'text.username' })}
                        />
                    </Item>
                    <Button
                        className='forgot-password__submit-form'
                        type='primary'
                        htmlType='submit'
                    >
                        {formTranslate({ id: 'button.send' })}
                    </Button>
                    <Link
                        to={RP.login}
                        className='forgot-password__link-forgot-password'
                    >
                        {formTranslate({ id: 'link.signIn' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword
