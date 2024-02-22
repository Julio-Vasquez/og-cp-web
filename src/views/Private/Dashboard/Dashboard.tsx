import RadarBasic from '../../../components/Charts/RadarBasic/RadarBasic'
import ShapeLiquid from '../../../components/Charts/ShapeLiquid/ShapeLiquid'

import useIntl from '../../../hooks/useIntl'
import iconUser from '../../../assets/svg/iconUser.svg'
import { funcShapeLiquid } from '../../../utils/functions/funcShapeLiquid.func'

import './Dashboard.scss'
import CustomCarousel from '../../../components/Carousel/Carousel'
import { Select, theme } from 'antd'

const Dashboard = () => {
    const child = ['Juan Miguel', 'Juan José', 'Juan Manuel']

    const { formatMessage } = useIntl()
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
            <div className='main-dashboard__skills'></div>
            <div className='main-dashboard__progress'>
                <CustomCarousel>
                    <div style={{ border: 'solid 2px black' }}>
                        <ShapeLiquid
                            percent={0.3}
                            style={{ shape: funcShapeLiquid }}
                            outLine={{
                                border: 2,
                                distance: 19,
                                style: { stroke: '#FAAD14', strokeOpacity: 0.65 },
                            }}
                            waveLength={128}
                            theme={{ color: '#FAAD14' }}
                            str='subTitle.readingWriting'
                        />
                    </div>
                    <div style={{ border: 'solid 2px black' }}>
                        <ShapeLiquid
                            percent={0.5}
                            style={{ shape: funcShapeLiquid }}
                            outLine={{
                                border: 2,
                                distance: 19,
                                style: { stroke: '#FAAD14', strokeOpacity: 0.65 },
                            }}
                            waveLength={128}
                            theme={{ color: 'red' }}
                            str='subTitle.perceptual'
                        />
                    </div>
                    <div style={{ border: 'solid 2px black' }}>
                        <ShapeLiquid
                            percent={0.8}
                            style={{ shape: funcShapeLiquid }}
                            outLine={{
                                border: 2,
                                distance: 19,
                                style: { stroke: '#FAAD14', strokeOpacity: 0.65 },
                            }}
                            waveLength={128}
                            theme={{ color: 'purple' }}
                            str='subTitle.discriminative'
                        />
                    </div>
                </CustomCarousel>
            </div>
            <div className='main-dashboard__div2'> div2</div>
            <div className='main-dashboard__div3'>div3</div>
            <div className='main-dashboard__div4'>div4</div>
        </div>
    )
}

export default Dashboard
