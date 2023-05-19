import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Steps } from 'antd'
import {
    CheckOutlined,
    LeftOutlined,
    RightOutlined,
    StarOutlined,
    UserAddOutlined,
} from '@ant-design/icons'

import Account from '../../../components/Steps/SignUp/Account/Account'
import LoginImage from './../../../assets/img/publicBackground.jpg'
import PersonalInformation1 from '../../../components/Steps/SignUp/PersonalInformation1/PersonalInformation1'
import PersonalInformation2 from '../../../components/Steps/SignUp/PersonalInformation2/PersonalInformation2'

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

    const initialValues = { remember: true }

    const steps: StepType[] = [
        { key: 1, title: '', component: <PersonalInformation1 /> },
        { key: 2, title: '', component: <PersonalInformation2 /> },
        { key: 3, title: '', component: <Account /> },
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
            setPersonaInformation({ ...personaInformation, ...values })
            console.log('22', personaInformation)
        } else {
            const isAdmin = availableData?.payload?.roles.find(
                (item: signUpRoles) => item.role === ROLES.Admin
            )
            const { role } = isAdmin
            console.log(role)

            mutation({
                ...personaInformation,
                ...values,
                role: role || ROLES.Admin,
            })
        }
    }

    return (
        <div className='signUp'>
            <div className='signUp__container'>
                <img
                    className='signUp__img-container'
                    src={LoginImage}
                    alt='image'
                />
                <Form
                    initialValues={initialValues}
                    className='signUp__form-data'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <UserAddOutlined className='signUp__icon' />
                    <div className='start'>
                        <div className='start__line' />
                        <div className='start__legend'>
                            <StarOutlined />
                        </div>
                        <div className='start__line'></div>
                    </div>
                    <h2 className='signUp__title'>
                        {formatMessage({ id: 'title.signUp' })}
                    </h2>
                    <div className='signUp__steps'>
                        <Steps
                            current={currentStep}
                            items={steps}
                            className='signUp__steps-main'
                        />

                        {content}

                        <div className='signUp__main-submit-form'>
                            <Button
                                className='signUp__submit-form'
                                onClick={onPrev}
                                disabled={isFirstStep}
                            >
                                <LeftOutlined />
                            </Button>

                            <Button
                                className='signUp__submit-form'
                                htmlType='submit'
                            >
                                {!isLastStep ? (
                                    <>
                                        <RightOutlined />
                                    </>
                                ) : (
                                    <>
                                        <CheckOutlined />
                                    </>
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className='signUp__link-login '>
                        <Link to='/login'>
                            {formatMessage({ id: 'link.SignIn' })}
                        </Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}
Signup.propTypes = signupPropTypes
Signup.defaultProps = signupDefaultProps

export default Signup
