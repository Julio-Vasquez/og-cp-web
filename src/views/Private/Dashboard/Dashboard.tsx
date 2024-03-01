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

const Dashboard = () => {
    const child = ['Juan Miguel', 'Juan José', 'Juan Manuel']

    return (
        <div className='main-dashboard'>
            <div className='main-dashboard__div0'>
                <Select
                    allowClear
                    bordered={false}
                    placeholder='Children name'
                    options={child?.map(item => ({
                        value: item,
                        label: item,
                    }))}
                />
                <img src={iconUser} alt='user-image' />
            </div>
            <div className='main-dashboard__skills'>
                <AreaChart
                    data={{
                        type: 'fetch',
                        value: 'https://assets.antv.antgroup.com/g2/stocks.json',
                        transform: [
                            {
                                type: 'filter',
                                callback: (d: any) => d.symbol === 'GOOG',
                            },
                        ],
                    }}
                    xField={funcAreaChart}
                    yField='price'
                    style={{
                        fill: 'linear-gradient(-90deg, white 0%, darkgreen 100%)',
                    }}
                    axis={{ y: { labelFormatter: '~s' } }}
                    line={{ style: { stroke: '#6744c6a6', strokeWidth: 2 } }}
                />
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
