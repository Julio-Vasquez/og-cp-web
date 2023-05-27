import { useState } from 'react'
import { Form, Input } from 'antd'

import { useIntl } from '../../../../hooks/useIntl'

import './Account.scss'

const { Item } = Form
const { Password } = Input

const Account = () => {
    const { formatMessage } = useIntl()
    const [passwordVisible, setPasswordVisible] = useState(false)

    return (
        <div className='account'>
            <Item
                name='mail'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputEmail' }),
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='account__item'
            >
                <Input
                    placeholder={formatMessage({ id: 'texts.mail' })}
                    className='account__input'
                />
            </Item>
            <Item
                name='username'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputUsername' }),
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='account__item'
            >
                <Input
                    placeholder={formatMessage({ id: 'texts.username' })}
                    className='account__input'
                />
            </Item>
            <Item
                name='password'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputPassword' }),
                    },
                ]}
                wrapperCol={{ offset: 0 }}
                className='account__item'
            >
                <Password
                    placeholder={formatMessage({ id: 'texts.password' })}
                    className='account__input'
                />
            </Item>
            <Item
                name='confirm'
                dependencies={['password']}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.confirmPassword' }),
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject(
                                new Error(
                                    formatMessage({ id: 'texts.passwordDoMatch' })
                                )
                            )
                        },
                    }),
                ]}
                className='account__item'
            >
                <Password
                    placeholder={formatMessage({ id: 'texts.passwordConfirm' })}
                    className='account__input'
                />
            </Item>
        </div>
    )
}

export default Account
