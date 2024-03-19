import { Select } from 'antd'
import ShapeLiquid from '../../../components/Charts/ShapeLiquid/ShapeLiquid'

import iconUser from '../../../assets/svg/iconUser.svg'
import PieChart from '../../../components/Charts/PieChart'
import AreaChart from '../../../components/Charts/AreaChart'
import BarChart from '../../../components/Charts/BarChart/BarChart'
import CustomCarousel from '../../../components/Carousel/Carousel'

import {
    funcAreaChart,
    funcShapeLiquid,
} from '../../../utils/functions/funcShapeLiquid.func'

import './Dashboard.scss'
import CustomCard from '../../../components/Cards/CustomCard'
import { useState } from 'react'
import api from '../../../api'
import { useMutation } from '../../../hooks/api'

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
        _id: '47e56d0c-403f-4593-a98e-fe6ced28ef0e    ',
        name: 'Miguel',
        avatar: 'https://static.photocrowd.com/article-images/2015-12/article107/upl/H0/107-12-tips-photographing-children.RyAPvASBm0uWwX4OzlP-v2u12.jpeg',
    },
    {
        _id: '7775847b-b199-4704-a203-8047666e7ec9',
        name: 'Ana',
        avatar: 'https://anakoskaphotography.com/wp-content/uploads/2019/02/Girl-holding-a-yellow-flower-in-outdoor-session.jpg',
    },
]

const Dashboard = () => {
    const [selectedChild, setSelectedChild] = useState<Child>(child[0])

    const onCompleted = (data: any) => {
        console.log(data)
    }

    const [mutation, { loading }] = useMutation(
        { functionFetch: api.charts.getActivityByDay },
        { onCompleted, cancelError: false }
    )

    const handleOnChangeChild = (values: string) => {
        setSelectedChild(child.find(item => item._id === values)!)
        mutation({ _idChildren: values })
    }

    return (
        <div className='main-dashboard'>
            <div className='main-dashboard__div0'>
                <img src={selectedChild.avatar} alt='user-image' />
                <Select
                    defaultValue={selectedChild.name}
                    allowClear
                    bordered={false}
                    onChange={handleOnChangeChild}
                    options={child?.map(item => ({
                        value: item._id,
                        label: item.name,
                    }))}
                />
            </div>
            <div className='main-dashboard__skills'>
                <AreaChart selectedChild={selectedChild._id} />
            </div>
            <div className='main-dashboard__progress'>
                <CustomCarousel>
                    <div>
                        <ShapeLiquid
                            percent={0.3}
                            style={{ shape: funcShapeLiquid }}
                            outLine={{
                                border: 2,
                                distance: 19,
                                style: { stroke: '#6744c6a6', strokeOpacity: 0.65 },
                            }}
                            waveLength={128}
                            theme={{ color: '#6744c6a6' }}
                            str='subTitle.readingWriting'
                        />
                    </div>
                    <div>
                        <ShapeLiquid
                            percent={0.5}
                            style={{ shape: funcShapeLiquid }}
                            outLine={{
                                border: 2,
                                distance: 19,
                                style: { stroke: '#6744c6a6', strokeOpacity: 0.65 },
                            }}
                            waveLength={128}
                            theme={{ color: '#6744c6a6' }}
                            str='subTitle.perceptual'
                        />
                    </div>
                    <div>
                        <ShapeLiquid
                            percent={0.4}
                            style={{ shape: funcShapeLiquid }}
                            outLine={{
                                border: 2,
                                distance: 19,
                                style: { stroke: '#6744c6a6', strokeOpacity: 0.65 },
                            }}
                            waveLength={128}
                            theme={{ color: '#6744c6a6' }}
                            str='subTitle.discriminative'
                        />
                    </div>
                </CustomCarousel>
            </div>
            <div className='main-dashboard__div2'>
                <CustomCard backGroundColor='#6744c60e' />
                <CustomCard backGroundColor='#6744c63a' />
                <CustomCard backGroundColor='#6744c665' />
                <CustomCard backGroundColor='#6744c6a6' />
            </div>
            <div className='main-dashboard__div5'>
                <PieChart />
            </div>
            <div className='main-dashboard__div4'>
                <BarChart />
            </div>
        </div>
    )
}

export default Dashboard
