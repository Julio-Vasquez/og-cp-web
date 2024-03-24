import { Form, Steps } from 'antd'
import { FC, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
    CheckOutlined,
    LeftOutlined,
    RightOutlined,
    UserAddOutlined,
} from '@ant-design/icons'

import Star from '../../../components/Star/Star'
import Account from '../../../components/Steps/Account/Account'
import LoginImage from './../../../assets/img/publicBackground.jpg'
import CustomButton from '../../../components/CustomButton/CustomButton'
import ContactData from '../../../components/Steps/ContactData/ContactData'
import PersonalInformation from '../../../components/Steps/PersonalInformation/PersonalInformation'

import api from '../../../api'
import useIntl from '../../../hooks/useIntl'
import { useMutation, useQuery } from '../../../hooks/api'
import { StepType, useStep } from '../../../hooks/useStep'
import { ROLES } from '../../../utils/constants/roles.enum'
import { Status } from '../../../utils/constants/status.enum'
import { ROUTES_PUBLIC as RP } from '../../../utils/constants/routes.constants'
import {
    ApiResponseError,
    ApiResponseSuccess,
} from '../../../utils/types/response.type'
import {
    errorNotification,
    successNotification,
} from '../../../utils/notifications/notification.action'
import {
    SignUpDefaultProps,
    SignUpProps,
    SignUpRoles,
    SignUpTypeDocument,
    AvailableDataTypes,
} from './signUp.types'

import './SignUp.scss'

export const SignUp: FC<SignUpProps> = () => {
    const navigate = useNavigate()
    const { formatMessage } = useIntl()
    const [personaInformation, setPersonaInformation] = useState({})

    const { data: availableData, loading: loadingAvailableData } =
        useQuery<AvailableDataTypes>({
            functionFetch: api.defaultData.availableData,
        })

    const checkStatus = (key: 'roles' | 'genders' | 'typeDocuments') =>
        availableData?.status === Status.success ? availableData.payload?.[key] : []

    const steps: StepType[] = [
        {
            key: 1,
            component: <PersonalInformation loading={loadingAvailableData} />,
        },
        {
            key: 2,
            component: (
                <ContactData
                    loading={loadingAvailableData}
                    genders={checkStatus('genders')}
                    typeDocuments={
                        checkStatus('typeDocuments') as SignUpTypeDocument[]
                    }
                />
            ),
        },
        { key: 3, component: <Account loading={loadingAvailableData} /> },
    ]

    const { currentStep, content, isFirstStep, isLastStep, next, previous } =
        useStep(steps)

    const onPrev = () => previous()

    const onNext = () => next()

    const onCompleted = ({ data: { message } }: ApiResponseSuccess) => {
        successNotification(message)
        navigate(RP.login)
    }

    const onError = ({ message }: ApiResponseError) => errorNotification(message)

    const [mutation, { loading }] = useMutation(
        { functionFetch: api.auth.signUp },
        { onCompleted, onError }
    )

    const onFinish = (values: any) => {
        if (!isLastStep) {
            onNext()
            setPersonaInformation({ ...personaInformation, ...values })
        } else {
            const admin = checkStatus('roles') as SignUpRoles[]
            const role =
                admin.find((item: SignUpRoles) => item.role === ROLES.Admin)?.role ??
                ROLES.Admin

            mutation({ ...personaInformation, ...values, role })
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
                        <div className='main-signUp__content'>{content}</div>
                        <div className='main-signUp__btn-prev'>
                            <CustomButton
                                onClick={onPrev}
                                disable={isFirstStep}
                                children={<LeftOutlined />}
                                width='60%'
                                hight='auto'
                            />
                        </div>
                        <div className='main-signUp__btn-next'>
                            <CustomButton
                                width={loading ? '100%' : '60%'}
                                hight='auto'
                                htmlType='submit'
                                loading={loading}
                                children={
                                    isLastStep ? (
                                        <CheckOutlined />
                                    ) : (
                                        <RightOutlined />
                                    )
                                }
                            />
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

SignUp.defaultProps = SignUpDefaultProps

export default SignUp
