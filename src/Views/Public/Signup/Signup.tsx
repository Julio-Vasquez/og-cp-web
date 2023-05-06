import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Steps } from 'antd'
import { StarOutlined, UserAddOutlined } from '@ant-design/icons'

import Account from '../../../components/Steps/Account/Account'
import LoginImage from './../../../assets/img/publicBackground.jpg'
import PersonalInformation from '../../../components/Steps/PersonalInformation/PersonalInformation'

import {
    signupDefaultProps,
    signupPropTypes,
    signupProps,
    signUpRoles,
    availableDataTypes,
} from './signup.types'
import api from '../../../api'
import { useIntl } from '../../../hooks/useIntl'
import { useMutation, useGet } from '../../../hooks/api'
import { StepType, useStep } from '../../../hooks/useStep'
import { ROLES } from '../../../utils/constants/roles/roles.enum'

import './Signup.scss'

export const Signup: FC<signupProps> = () => {
    const { formatMessage } = useIntl()

    const labelCol = { span: 0 }
    const wrapperCol = { span: 0 }
    const initialValues = { remember: true }

    const steps: StepType[] = [
        { key: 1, title: 'primero', component: <PersonalInformation /> },
        { key: 2, title: 'segundo', component: <Account /> },
    ]
    const [personaInformation, setPersonaInformation] = useState({
        identification: 0,
        name: '',
        middleName: '',
        lastNameOne: '',
        lastNameTwo: '',
        birthDate: '',
        gender: '',
        role: '',
        username: '',
        password: '',
        mail: '',
        typeDocument: '',
        phoneNumber: 0,
    })

    const { currentStep, content, isFirstStep, isLastStep, next, previous } =
        useStep(steps)
    const onPrev = () => previous()
    const onNext = () => next()
    const onCompleted = (data: any) => {}
    const onError = (err: any) => {}

    const { data: availableData, loading: loadingAvailableData } =
        useGet<availableDataTypes>(
            { functionFetch: api.defaultData.availableData },
            {}
        )

    const [mutation, { loading, error, data }] = useMutation(
        { functionFetch: api.auth.signUp },
        { onCompleted, onError, cancelError: false }
    )

    const onFinish = (values: any) => {
        if (!isLastStep) {
            onNext()
            setPersonaInformation(values)
        } else {
            const isAdmin = availableData?.payload?.roles?.find(
                (item: signUpRoles) => item.role === ROLES.Admin
            )
            const { role } = isAdmin

            mutation({
                ...personaInformation,
                ...values,
                role: role || ROLES.Admin,
            })
        }
    }

    return (
        <div className='sign-up'>
            <div className='sign-up__container'>
                <img
                    className='sign-up__img-container'
                    src={LoginImage}
                    alt='image'
                />

                <Form
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    initialValues={initialValues}
                    className='sign-up__form-data'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <UserAddOutlined className='sign-up__icon' />
                    <div className='start'>
                        <div className='start__line' />
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__line'></div>
                    </div>
                    <h2 className='sign-up__title'>
                        {formatMessage({ id: 'title.signUp' })}
                    </h2>
                    <div className='sign-up__steps'>
                        <Steps current={currentStep} items={steps} />

                        {content}

                        <Button
                            className='sign-up__submit-form'
                            onClick={onPrev}
                            disabled={isFirstStep}
                        >
                            {formatMessage({ id: 'button.prev' })}
                        </Button>

                        <Button className='sign-up__submit-form' htmlType='submit'>
                            {!isLastStep ? (
                                <>{formatMessage({ id: 'button.next' })}</>
                            ) : (
                                <>{formatMessage({ id: 'button.signUp' })}</>
                            )}
                        </Button>
                    </div>
                    o
                    <Link className='sign-up__link-login ' to='/login'>
                        {formatMessage({ id: 'link.orSignIn' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}
Signup.propTypes = signupPropTypes
Signup.defaultProps = signupDefaultProps

export default Signup
