import { Form, Input } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import Star from '../../../components/Star/Star'
import LoginImg from '../../../assets/img/publicBackground.jpg'
import CustomButton from '../../../components/CustomButton/CustomButton'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import { ForgotPassword } from './forgotPassword.type'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'
import {
    ApiResponseError,
    ApiResponseSuccess,
} from '../../../utils/types/response.type'
import {
    successNotification,
    errorNotification,
} from '../../../utils/notifications/notification.action'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'

import './ForgotPassword.scss'

const { Item } = Form

const ForgotPassword = () => {
    const navigate = useNavigate()
    const { formatMessage } = useIntl()

    const onCompleted = ({ data: { message } }: ApiResponseSuccess) => {
        successNotification(message)
        navigate(RP.login)
    }

    const onError = ({ message }: ApiResponseError) => errorNotification(message)

    const [mutation, { loading }] = useMutation(
        { functionFetch: api.auth.forgotPassword },
        { onCompleted, onError, cancelError: false }
    )

    const onFinish = (values: ForgotPassword) =>
        mutation<ForgotPassword>({ ...values })

    return (
        <div className='forgot-password'>
            <div className='forgot-password__container'>
                <img
                    className='forgot-password__image-container'
                    src={LoginImg}
                    alt='Logo form forgot password'
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
                        {formatMessage({ id: 'title.forgotPassword' })}
                    </h2>
                    <p>
                        {formatMessage({
                            id: 'text.inputObj',
                            objVars: {
                                field: formatMessage({ id: 'text.username' }),
                            },
                        })}
                    </p>
                    <Item
                        hasFeedback
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
                            placeholder={formatMessage({
                                id: 'text.userOrEmail',
                                objVars: {
                                    user: formatMessage({ id: 'text.username' }),
                                    mail: formatMessage({ id: 'text.mail' }),
                                },
                            })}
                        />
                    </Item>
                    <CustomButton
                        type='primary'
                        htmlType='submit'
                        loading={loading}
                        children={formatMessage({
                            id: 'button.setPassword',
                            objVars: {
                                user: formatMessage({ id: 'button.change' }),
                                mail: formatMessage({ id: 'button.password' }),
                            },
                        })}
                        width='70%'
                    />

                    <Link
                        to={RP.login}
                        className='forgot-password__link-forgot-password'
                    >
                        {formatMessage({ id: 'link.signIn' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default ForgotPassword
