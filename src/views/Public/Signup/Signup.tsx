import {
    CheckOutlined,
    LeftOutlined,
    RightOutlined,
    UserAddOutlined,
} from '@ant-design/icons'
import { FC, useState } from 'react'
import { Button, Form, Steps } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

import Star from '../../../components/Star/Star'
import Account from '../../../components/Steps/Account/Account'
import ContactData from '../../../components/Steps/ContactData/ContactData'
import PersonalInformation from '../../../components/Steps/PersonalInformation/PersonalInformation'

import {
    SignUpDefaultProps,
    SignUpPropTypes,
    SignUpProps,
    SignUpRoles,
    availableDataTypes,
} from './signUp.types'
import api from '../../../api'
import { useMutation, useGet } from '../../../hooks/api'
import { StepType, useStep } from '../../../hooks/useStep'
import { ROLES } from '../../../utils/constants/roles.enum'
import LoginImage from './../../../assets/img/publicBackground.jpg'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'
import {
    errorNotification,
    successNotification,
} from '../../../utils/notifications/notification.action'

import './SignUp.scss'
import useIntl from '../../../hooks/useIntl'

export const SignUp: FC<SignUpProps> = () => {
    const navigate = useNavigate()
    const { formatMessage } = useIntl()
    const [personaInformation, setPersonaInformation] = useState({})

    const { data: availableData, loading: loadingAvailableData } =
        useGet<availableDataTypes>(
            { functionFetch: api.defaultData.availableData },
            {}
        )

    const steps: StepType[] = [
        {
            key: 1,
            title: '',
            component: <PersonalInformation loading={loadingAvailableData} />,
        },
        {
            key: 2,
            title: '',
            component: (
                <ContactData
                    loading={loadingAvailableData}
                    genders={availableData?.payload?.genders}
                    typeDocuments={availableData?.payload?.typeDocuments}
                />
            ),
        },
        { key: 3, title: '', component: <Account loading={loadingAvailableData} /> },
    ]

    const { currentStep, content, isFirstStep, isLastStep, next, previous } =
        useStep(steps)
    const onPrev = () => previous()
    const onNext = () => next()

    const onCompleted = (data: any) => {
        if (data.data.statusCode === 201) {
            successNotification(data.data.message)
            navigate(RP.login)
        } else {
            errorNotification(data.data.message)
        }
    }

    const [mutation] = useMutation(
        { functionFetch: api.auth.signUp },
        { onCompleted }
    )

    const onFinish = (values: any) => {
        if (!isLastStep) {
            onNext()
            setPersonaInformation({ ...personaInformation, ...values })
        } else {
            const isAdmin = availableData?.payload?.roles.find(
                (item: SignUpRoles) => item.role === ROLES.Admin
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
        <div className='main-signUp'>
            <div className='main-signUp__container'>
                <img
                    className='main-signUp__img-container'
                    src={LoginImage}
                    alt='image'
                />
                <Form
                    className='main-signUp__form-data'
                    onFinish={onFinish}
                    autoComplete='off'
                    layout='vertical'
                >
                    <UserAddOutlined className='main-signUp__icon' />
                    <Star />
                    <h2 className='main-signUp__title'>
                        {formatMessage({ id: 'title.signUp' })}
                    </h2>
                    <div className='main-signUp__steps'>
                        <Steps
                            current={currentStep}
                            items={steps}
                            className='main-signUp__steps-main'
                        />
                        {content}
                        <div className='main-signUp__main-submit-form'>
                            <Button
                                className='main-signUp__submit-form'
                                onClick={onPrev}
                                disabled={isFirstStep}
                            >
                                <LeftOutlined />
                            </Button>

                            <Button
                                className='main-signUp__submit-form'
                                htmlType='submit'
                            >
                                {!isLastStep ? <RightOutlined /> : <CheckOutlined />}
                            </Button>
                        </div>
                    </div>

                    <Link to={RP.login} className='main-signUp__link-login '>
                        {formatMessage({ id: 'link.signIn' })}
                    </Link>
                </Form>
            </div>
        </div>
    )
}

SignUp.propTypes = SignUpPropTypes
SignUp.defaultProps = SignUpDefaultProps

export default SignUp
