import { Select } from 'antd'
import { useEffect, useState } from 'react'

import PieChart from '../../../components/Charts/PieChart'
import AreaChart from '../../../components/Charts/AreaChart'
import CustomCard from '../../../components/Cards/CustomCard'
import BarChart from '../../../components/Charts/BarChart/BarChart'
import ShapeLiquid from '../../../components/Charts/ShapeLiquid/ShapeLiquid'
import { CustomCarousel } from '../../../components/Carousels/CustomCarousel'

import api from '../../../api'
import { CHILDREN, Children } from './mock'
import { useMutation } from '../../../hooks/api'
import userIcon from '../../../assets/svg/iconUser.svg'
import { useChildren } from '../../../hooks/useChildren'
import { Status } from '../../../utils/constants/status.enum'
import { ACTIVITIES } from '../../../utils/mocks/mockActivities'
import { MutationProps, MutationResponse } from './dashboard.type'
import { ApiResponseSuccess } from '../../../utils/types/response.type'
import { successNotification } from '../../../utils/notifications/notification.action'

import './Dashboard.scss'
import useData from '../../../hooks/useData'
import { AUTH } from '../../../utils/constants/redux.constants'
import { ChildrenContextActions } from '../../../context/Children/types'

const Dashboard = () => {
    const {
        APD: { etapa },
    } = ACTIVITIES
    const [selectedChild, setSelectedChild] = useState<Children>(CHILDREN[0])
    const { dispatch } = useChildren()
    const { username } = useData({ reducer: AUTH })

    const handleOnChangeChild = (values: string) =>
        setSelectedChild(CHILDREN.find(item => item._id === values)!)

    const options = CHILDREN.map(item => ({ value: item._id, label: item.name }))

    const onCompleted = ({ data }: ApiResponseSuccess) =>
        successNotification(`${data.message}`, 'bottomRight')

    const [mutation, { data: response }] = useMutation<MutationResponse[]>(
        { functionFetch: api.charts.getProgressByPhase },
        { onCompleted }
    )

    const data: MutationResponse[] =
        response.status === Status.success
            ? response.payload
            : ([] as MutationResponse[])

    useEffect(() => {
        mutation<MutationProps>({ _idChildren: selectedChild?._id })
        dispatch({
            type: ChildrenContextActions.ADD_CHILDREN,
            payload: {
                username,
                _idChildren: selectedChild._id,
                nameChildren: selectedChild.name,
            },
        })
    }, [selectedChild._id])

    return (
        <div className='main-dashboard'>
            <div className='main-dashboard__header'>
                <div className='main-dashboard__children'>
                    <img
                        src={selectedChild ? selectedChild?.avatar : userIcon}
                        alt='user-image'
                    />
                    <Select
                        className='main-dashboard__select'
                        defaultValue={selectedChild?.name}
                        allowClear
                        bordered={false}
                        onChange={handleOnChangeChild}
                        options={options}
                    />
                </div>
                <div className='main-dashboard__cards-content'>
                    <div className='main-dashboard__cards'>
                        {etapa.map(res => (
                            <CustomCard
                                key={res.key}
                                title={res.name}
                                percentage={res.percentage}
                                className='pct1'
                            />
                        ))}
                    </div>
                </div>
            </div>
            <AreaChart selectedChild={selectedChild?._id} />
            <div className='main-dashboard__charts'>
                <CustomCarousel>
                    {data.map((item, index) => (
                        <ShapeLiquid
                            key={index}
                            percent={item.pct}
                            name={item.name}
                        />
                    ))}
                </CustomCarousel>
                <BarChart
                    selectedChild={selectedChild?._id}
                    selectedPhase={selectedChild?._id}
                />
                <PieChart
                    selectedChild={selectedChild?._id}
                    selectedPhase={selectedChild?._id}
                />
            </div>
        </div>
    )
}

export default Dashboard
