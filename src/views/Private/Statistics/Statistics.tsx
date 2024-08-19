import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Select, Table } from 'antd'

import CustomAvatar from '../../../components/Avatars/CustomAvatar'

import { CHILD, DATA } from './mock'
import { DataType } from './statistic.type'
import iconUser from '../../../assets/svg/iconUser.svg'
import { PercentProgress } from '../../../components/Charts/Progress/Progress'
import { TablePaginationPosition, Columns } from '../../../utils/types/table.type'

import './Statistics.scss'

const renderRating = (_: any, i: any) => {
    return <CustomAvatar percent={i.percentage} key={i.key} />
}
const renderProgress = (_: any, i: DataType) => {
    return <PercentProgress percent={i.percentage} />
}

const columns: Columns<DataType> = [
    {
        title: 'Nombre Actividad',
        align: 'center',
        dataIndex: 'name',
        width: '15%',
        key: 'name',
        render: text => <Link to='#'>{text}</Link>,
    },
    {
        title: 'Descripción',
        align: 'center',
        width: '45%',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'progreso',
        align: 'center',
        width: '30%',
        key: 'percent',
        render: renderProgress,
    },
    {
        title: 'Calificación',
        align: 'center',
        key: 'key',
        dataIndex: 'percentage',
        render: renderRating,
    },
]

const Statistics = () => {
    const [page, setPage] = useState<TablePaginationPosition>('bottomCenter')

    return (
        <div className='main-statistics'>
            <div className='main-statistics__children'>
                <div>
                    <img src={iconUser} alt='user-percentage' />
                    <Select
                        allowClear
                        bordered={false}
                        placeholder='Children name'
                        options={CHILD}
                    />
                </div>
                <h1 className='main-statistics__title'>Etapa 1</h1>
            </div>
            <Table
                scroll={{ x: 100 }}
                columns={columns}
                pagination={{ position: [page] }}
                dataSource={DATA}
            />
        </div>
    )
}

export default Statistics
