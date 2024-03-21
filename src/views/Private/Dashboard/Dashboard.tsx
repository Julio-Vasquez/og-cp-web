import { Select } from 'antd'
import { useEffect, useState } from 'react'

import PieChart from '../../../components/Charts/PieChart'
import AreaChart from '../../../components/Charts/AreaChart'
import CustomCard from '../../../components/Cards/CustomCard'
import BarChart from '../../../components/Charts/BarChart/BarChart'
import CustomCarousel from '../../../components/Carousel/Carousel'
import ShapeLiquid from '../../../components/Charts/ShapeLiquid/ShapeLiquid'

import './Dashboard.scss'
import { useMutation } from '../../../hooks/api'
import api from '../../../api'
import { ApiResponseSuccess } from '../../../utils/types/response.type'
import { Status } from '../../../utils/constants/status.enum'

type Child = {
    _id: string
    name: string
    avatar: string
}

const child: Child[] = [
    {
        _id: 'b9435896-75a1-439e-ba44-d8babb0997b8',
        name: 'Juan',
        avatar: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg',
    },
    {
        _id: '47e56d0c-403f-4593-a98e-fe6ced28ef0e',
        name: 'Miguel',
        avatar: 'https://static.photocrowd.com/article-images/2015-12/article107/upl/H0/107-12-tips-photographing-children.RyAPvASBm0uWwX4OzlP-v2u12.jpeg',
    },
    {
        _id: '7775847b-b199-4704-a203-8047666e7ec9',
        name: 'Ana',
        avatar: 'https://anakoskaphotography.com/wp-content/uploads/2019/02/Girl-holding-a-yellow-flower-in-outdoor-session.jpg',
    },
]
type T = { _idChildren: string }
type ChartResponse = { name: string; pct: number }

const Dashboard = () => {
    const [selectedChild, setSelectedChild] = useState<Child>(child[0])

    const handleOnChangeChild = (values: string) =>
        setSelectedChild(child.find(item => item._id === values)!)

    const options = child?.map(item => ({ value: item._id, label: item.name }))
    const onCompleted = ({ data, variables }: ApiResponseSuccess) => {}

    const [mutation, { data: response }] = useMutation<ChartResponse[]>(
        { functionFetch: api.charts.getProgressByPhase },
        { onCompleted }
    )
    const data: ChartResponse[] =
        response.status === Status.success
            ? response.payload
            : ([] as ChartResponse[])

    useEffect(() => {
        mutation<T>({ _idChildren: selectedChild._id })
    }, [selectedChild._id])

    return (
        <div className='main-dashboard'>
            <div className='main-dashboard__div0'>
                <img src={selectedChild.avatar} alt='user-image' />
                <Select
                    defaultValue={selectedChild.name}
                    allowClear
                    bordered={false}
                    onChange={handleOnChangeChild}
                    options={options}
                />
            </div>
            <div className='main-dashboard__div2'>
                <CustomCard backGroundColor='#6744c60e' />
                <CustomCard backGroundColor='#6744c63a' />
                <CustomCard backGroundColor='#6744c665' />
                <CustomCard backGroundColor='#6744c6a6' />
            </div>
            <div className='main-dashboard__skills'>
                <AreaChart selectedChild={selectedChild._id} />
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

            <div className='main-dashboard__div5'>
                <PieChart
                    selectedChild={selectedChild._id}
                    selectedPhase={selectedChild._id}
                />
            </div>
            <div className='main-dashboard__div4'>
                <BarChart
                    selectedChild={selectedChild._id}
                    selectedPhase={selectedChild._id}
                />
            </div>
        </div>
    )
}

export default Dashboard
