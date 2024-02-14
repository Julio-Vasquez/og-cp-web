import './Dashboard.scss'

import iconUser from '../../../assets/svg/iconUser.svg'
import { Chart } from '../../../components/Charts/RadarBasic'

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
    return (
        <div className='main-dashboard'>
            <div className='main-dashboard__div0'>
                <img src={iconUser} alt='user-image' />
                <p>Nombre de niño</p>
            </div>
            <div className='main-dashboard__skills'>
                <Chart
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
            <div className='main-dashboard__progress'> progress</div>
            <div className='main-dashboard__div2'> div2</div>
            <div className='main-dashboard__div3'>div3</div>
            <div className='main-dashboard__div4'>div4</div>
        </div>
    )
}

export default Dashboard
