import { Form, Input } from 'antd'

import { useIntl } from '../../../../hooks/useIntl'

import './Account.scss'

const { Item } = Form

const Account = () => {
    const { formatMessage } = useIntl()

    return (
        <div className='account'>
            <Item
                name='mail'
                rules={[{ required: true }]}
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
                rules={[{ required: true }]}
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
                rules={[{ required: true }]}
                wrapperCol={{ offset: 0 }}
                className='account__item'
            >
                <Input
                    placeholder={formatMessage({ id: 'texts.password' })}
                    className='account__input'
                />
            </Item>
        </div>
    )
}

export default Account
