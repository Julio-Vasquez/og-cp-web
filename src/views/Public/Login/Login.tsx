import { Form, Input } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { LockOutlined, UserOutlined } from '@ant-design/icons'

import Star from '../../../components/Avatars/Star/Star'
import { CustomButton } from '../../../components/Buttons/CustomButton/CustomButton'

import useIntl from '../../../hooks/useIntl'
import useData from '../../../hooks/useData'
import { login } from './../../../services/Auth/auth.slice'
import { LoginType } from '../../../services/Auth/auth.types'
import { AUTH } from '../../../utils/constants/redux.constants'
import loginImg from './../../../assets/img/publicBackground.jpg'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'

import './Login.scss'

const { Item } = Form
const { Password } = Input

export const Login = () => {
    const dispatch = useDispatch()
    const { formatMessage } = useIntl()
    const { loading } = useData({ reducer: AUTH })

    const onFinish = (values: Omit<LoginType, 'device'>) =>
        dispatch(login({ ...values, device: 'Desktop' }))

    return (
        <div className='login'>
            <div className='login__container'>
                <img
                    className='login__image-container'
                    src={loginImg}
                    alt='image-background'
                />
                <Form
                    className='login__signIn-form'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <Star />
                    <h2 className='login__title-signIn'>
                        {formatMessage({ id: 'title.signIn' })}
                    </h2>
                    <Item
                        name='username'
                        hasFeedback
                        rules={[
                            requiredField({ field: 'text.username' }),
                            maxLength({ field: 'text.username', max: 45 }),
                            minLength({ field: 'text.username', min: 4 }),
                        ]}
                        className='login__item'
                    >
                        <Input
                            autoComplete='true'
                            className='login__input'
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
                    <Item
                        className='login__item-pass'
                        name='password'
                        hasFeedback
                        rules={[
                            requiredField({ field: 'text.password' }),
                            maxLength({ field: 'text.password', max: 60 }),
                            minLength({ field: 'text.password', min: 4 }),
                        ]}
                    >
                        <Password
                            autoComplete='true'
                            className='login__input'
                            prefix={<LockOutlined />}
                            placeholder={formatMessage({ id: 'title.password' })}
                        />
                    </Item>
                    <CustomButton
                        htmlType='submit'
                        type='primary'
                        children={formatMessage({ id: 'button.login' })}
                        loading={loading}
                        width='55%'
                    />
                    <Link className='login__link ' to={RP.forgotPassword}>
                        {formatMessage({ id: 'link.forgotPassword' })}
                    </Link>
                    <Link className='login__link-register ' to={RP.register}>
                        {formatMessage({ id: 'link.signUp' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}

export default Login
