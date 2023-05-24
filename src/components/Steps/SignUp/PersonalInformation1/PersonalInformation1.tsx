import { Form, Input } from 'antd'

import useIntl from '../../../../hooks/useIntl'

const { Item } = Form

import './PersonalInformation1.scss'

const PersonalInformation1 = () => {
    const { formatMessage } = useIntl()

    return (
        <div className='personalInformation1'>
            <Item
                name='name'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputFirstName' }),
                    },
                ]}
                className='personalInformation1__item'
            >
                <Input
                    placeholder={formatMessage({ id: 'texts.firstName' })}
                    className='personalInformation1__input'
                />
            </Item>
            <Item name='middleName' className='personalInformation1__item'>
                <Input
                    placeholder={formatMessage({ id: 'texts.middleName' })}
                    className='personalInformation1__input'
                />
            </Item>

            <Item
                name='lastNameOne'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputFirstLastName' }),
                    },
                ]}
                className='personalInformation1__item'
            >
                <Input
                    placeholder={formatMessage({ id: 'texts.firstLastName' })}
                    className='personalInformation1__input'
                />
            </Item>
            <Item
                name='lastNameTwo'
                className='personalInformation1__item'
                rules={[
                    {
                        required: true,
                        message: formatMessage({ id: 'texts.inputMiddleName' }),
                    },
                ]}
            >
                <Input
                    placeholder={formatMessage({ id: 'texts.secondLastName' })}
                    className='personalInformation1__input'
                />
            </Item>
        </div>
    )
}

export default PersonalInformation1
