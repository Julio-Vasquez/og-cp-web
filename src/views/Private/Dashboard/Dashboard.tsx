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
import { Status } from '../../../utils/constants/status.enum'
import { MutationProps, MutationResponse } from './dashboard.type'
import { ApiResponseSuccess } from '../../../utils/types/response.type'

import './Dashboard.scss'

const Dashboard = () => {
    const [selectedChild, setSelectedChild] = useState<Children>(CHILDREN[0])

    const handleOnChangeChild = (values: string) =>
        setSelectedChild(CHILDREN.find(item => item._id === values)!)

    const options = CHILDREN.map(item => ({ value: item._id, label: item.name }))

    const onCompleted = ({ data, variables }: ApiResponseSuccess) => {}

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
    }, [selectedChild?._id])

    return (
        <div className='main-dashboard'>
            <div className='main-dashboard__children'>
                <img
                    src={selectedChild ? selectedChild?.avatar : userIcon}
                    alt='user-image'
                />
                <Select
                    defaultValue={selectedChild?.name}
                    allowClear
                    bordered={false}
                    onChange={handleOnChangeChild}
                    options={options}
                />
            </div>
            <div className='main-dashboard__custom-card'>
                <CustomCard backGroundColor='#6744c60e' text='Custom Card 1' />
                <CustomCard backGroundColor='#6744c63a' text='Custom Card 2' />
                <CustomCard backGroundColor='#6744c665' text='Custom Card 3' />
                <CustomCard backGroundColor='#6744c6a6' text='Custom Card 4' />
            </div>
            <div className='main-dashboard__skills'>
                <AreaChart selectedChild={selectedChild?._id} />
            </div>
            <div className='main-dashboard__progress'>
                <CustomCarousel>
                    {data.map((item, index) => (
                        <ShapeLiquid
                            key={index}
                            percent={item.pct}
                            name={item.name}
                        />
                    ))}
                </CustomCarousel>
            </div>
            <div className='main-dashboard__pie-chart'>
                <PieChart
                    selectedChild={selectedChild?._id}
                    selectedPhase={selectedChild?._id}
                />
            </div>
            <div className='main-dashboard__bar-chart'>
                <BarChart
                    selectedChild={selectedChild?._id}
                    selectedPhase={selectedChild?._id}
                />
            </div>
        </div>
    )
}

export default Dashboard
