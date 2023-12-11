import { Button, Form, Input } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import { useNavigate, useParams } from 'react-router-dom'

import Star from '../../../components/Star/Star'
import { ErrorToken } from '../../../components/Error/ErrorToken'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation } from '../../../hooks/api'
import {
    matchPassword,
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'
import {
    errorNotification,
    successNotification,
} from '../../../utils/notifications/notification.action'
import { ValidateToken } from '../../../utils/storage/storage'
import loginImg from '../../../assets/img/publicBackground.jpg'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'

import './SetPassword.scss'
import {
    ApiResponseError,
    ApiResponseSuccess,
} from '../../../utils/types/response.type'

const { Item } = Form
const { Password } = Input

export const SetPassword = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const { formatMessage } = useIntl()
    const validateToken = ValidateToken(token!)

    const onCompleted = ({ data: { message } }: ApiResponseSuccess) => {
        successNotification(message)
        navigate(RP.login)
    }

    const onError = ({ message }: ApiResponseError) => errorNotification(message)

    const [mutation] = useMutation(
        { functionFetch: api.auth.setPassword },
        { onCompleted, onError, cancelError: false }
    )

    const onFinish = (values: any) => {
        const { newPassword } = values
        mutation({ newPassword, token })
    }

    if (!validateToken) return <ErrorToken />

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
                    <Star />
                    <h2 className='set-password__title'>
                        {formatMessage({ id: 'text.assignNewPassword' })}
                    </h2>
                    <Item
                        name='newPassword'
                        hasFeedback
                        className='set-password__item'
                        rules={[
                            requiredField({ field: 'text.newPassword' }),
                            maxLength({ field: 'text.newPassword', max: 60 }),
                            minLength({ field: 'text.newPassword', min: 6 }),
                        ]}
                    >
                        <Password
                            className='set-password__input'
                            placeholder={formatMessage({
                                id: 'text.newPassword',
                            })}
                        />
                    </Item>
                    <Item
                        name='confirm'
                        dependencies={['newPassword']}
                        hasFeedback
                        className='set-password__item'
                        rules={[
                            requiredField({ field: 'text.confirmNewPassword' }),
                            maxLength({ field: 'text.confirmNewPassword', max: 60 }),
                            minLength({ field: 'text.confirmNewPassword', min: 6 }),
                            ({ getFieldValue }) =>
                                matchPassword({
                                    getFieldValue,
                                    field: 'newPassword',
                                }),
                        ]}
                    >
                        <Password
                            className='set-password__input'
                            placeholder={formatMessage({
                                id: 'text.confirmNewPassword',
                            })}
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
        </div>
    )
}

export default SetPassword
