import RadarBasic from '../../../components/Charts/RadarBasic/RadarBasic'
import ShapeLiquid from '../../../components/Charts/ShapeLiquid/ShapeLiquid'

import useIntl from '../../../hooks/useIntl'
import iconUser from '../../../assets/svg/iconUser.svg'
import { funcShapeLiquid } from '../../../utils/functions/funcShapeLiquid.func'

import './Dashboard.scss'
import CustomCarousel from '../../../components/Carousel/Carousel'
import { theme } from 'antd'

const Dashboard = () => {
    const data = [
        { name: 'Adaptabilidad', type: 'b', percentage: 10371 },
        { name: ' Colaboración', type: 'a', percentage: 7380 },
        { name: ' Comunicación', type: 'b', percentage: 7414 },
        { name: ' Creatividad', type: 'a', percentage: 2140 },
        { name: ' Pensamiento crítico', type: 'b', percentage: 660 },
        { name: 'Resolución de Problemas', type: 'a', percentage: 885 },
        { name: 'G2Plot', type: 'b', percentage: 1626 },
    ]

    const { formatMessage } = useIntl()
    return (
        <div className='main-dashboard'>
            <div className='main-dashboard__div0'>
                <img src={iconUser} alt='user-image' />
                <h3>Nombre de niño</h3>
            </div>
            <div className='main-dashboard__skills'>
                <RadarBasic
                    data={data}
                    xField='name'
                    yField='percentage'
                    colorField='type'
                    shapeField='smooth'
                    area={{ style: { fillOpacity: 0.2 } }}
                    scale={{
                        x: { padding: 0.5, align: 0 },
                        y: { nice: true, domainMax: 80, tickCount: 5 },
                    }}
                    axis={{
                        x: { title: false, grid: true },
                        y: {
                            gridAreaFill: 'rgba(0, 0, 0, 0.03)',
                            label: true,
                            title: false,
                            zIndex: 10,
                        },
                    }}
                    style={{ lineWidth: 2 }}
                />
            </div>
            <div className='main-dashboard__progress'>
                <p>{formatMessage({ id: 'subTitle.progress' })}</p>
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
                {/*  <ShapeLiquid
                    percent={0.8}
                    style={{ shape: funcShapeLiquid }}
                    outLineBorder={100}
                    outLineDistance={4}
                    outLineStyle={{ stroke: '#FFC100', strokeOpacity: 0.65 }}
                    waveLength={128}
                    theme={{ styleSheet: { brandColor: '#FAAD14' } }}
                    str='subTitle.perceptual'
                /> */}
            </div>
            <div className='main-dashboard__div2'> div2</div>
            <div className='main-dashboard__div3'>div3</div>
            <div className='main-dashboard__div4'>div4</div>
        </div>
    )
}

export default Dashboard
