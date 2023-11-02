import { FC } from 'react'
import { Form, Input, Spin } from 'antd'

import {
    PersonalInformationDefaultProps,
    PersonalInformationProps,
    PersonalInformationPropTypes,
} from './personalInformation.type'
import {
    maxLength,
    minLength,
    requiredField,
} from '../../../utils/functions/form.functions'
import { formTranslate } from '../../../utils/functions/translation.function'

import './PersonalInformation.scss'

const { Item } = Form

export const PersonalInformation: FC<PersonalInformationProps> = ({ loading }) => {
    return (
        <div className='personalInformation'>
            <Spin spinning={loading}>
                <Item
                    name='name'
                    hasFeedback
                    rules={[
                        requiredField({ field: 'text.firstName' }),
                        maxLength({ field: 'text.firstName', max: 50 }),
                        minLength({ field: 'text.firstName', min: 3 }),
                    ]}
                    className='personalInformation__item'
                >
                    <Input
                        placeholder={formTranslate({ id: 'text.firstName' })}
                        className='personalInformation__input'
                    />
                </Item>
                <Item
                    name='middleName'
                    hasFeedback
                    className='personalInformation__item'
                >
                    <Input
                        placeholder={formTranslate({ id: 'text.middleName' })}
                        className='personalInformation__input'
                    />
                </Item>
                <Item
                    name='lastNameOne'
                    hasFeedback
                    rules={[
                        requiredField({ field: 'text.firstLastName' }),
                        maxLength({ field: 'text.firstLastName', max: 60 }),
                        minLength({ field: 'text.firstLastName', min: 3 }),
                    ]}
                    className='personalInformation__item'
                >
                    <Input
                        placeholder={formTranslate({ id: 'text.firstLastName' })}
                        className='personalInformation__input'
                    />
                </Item>
                <Item
                    name='lastNameTwo'
                    hasFeedback
                    className='personalInformation__item'
                >
                    <Input
                        placeholder={formTranslate({ id: 'text.middleLastName' })}
                        className='personalInformation__input'
                    />
                </Item>
            </Spin>
        </div>
    )
}

PersonalInformation.propTypes = PersonalInformationPropTypes
PersonalInformation.defaultProps = PersonalInformationDefaultProps

export default PersonalInformation
