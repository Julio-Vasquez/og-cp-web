import { useState } from 'react'
import { Form, Spin } from 'antd'

import CustomButton from '../../../components/Buttons/CustomButton'
import PersonalInformation from '../../../components/Steps/PersonalInformation'
import { CardPresentation } from '../../../components/CardPresentation/CardPresentation'

import api from '../../../api'
import { useQuery } from '../../../hooks/api'

import { Status } from '../../../utils/constants/status.enum'
import { DataUser } from '../../../utils/types/userData.type'

import './Profile.scss'

export const Profile = () => {
    const [active, setActive] = useState<boolean>(true)
    const { data: userMe, loading } = useQuery<DataUser>({
        functionFetch: api.user.userMe,
    })

    const payload =
        userMe.status === Status.success ? userMe.payload : ({} as DataUser)
    const handleSetState = () => setActive(!active)
    const onFinish = (values: any) => {
        console.log(values)
    }

    return (
        <Spin spinning={loading}>
            <div className='main-profile'>
                <div className='main-profile__btn-active-edit'>
                    <CustomButton
                        width='300px'
                        children='Edit'
                        onClick={handleSetState}
                        disable={!active}
                    />
                </div>
                <CardPresentation payload={payload} />
                <div className='main-profile__container-form'>
                    <Form
                        className='main-profile__form-edit-profile'
                        disabled={active}
                        onFinish={onFinish}
                        autoComplete='off'
                        layout='vertical'
                    >
                        <PersonalInformation loading={loading} />
                        <div className='main-profile__btn-container'>
                            <CustomButton
                                width='200px'
                                disable={active}
                                onClick={handleSetState}
                                children='cancel'
                            />
                            <CustomButton
                                width='200px'
                                htmlType='submit'
                                children='Edit'
                            />
                        </div>
                    </Form>
                </div>
            </div>
        </Spin>
    )
}

export default Profile
