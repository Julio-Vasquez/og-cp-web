import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Select, Table } from 'antd'

import CustomAvatar from '../../../components/CustomAvatar'

import { CHILD, DATA } from './mock'
import iconUser from '../../../assets/svg/iconUser.svg'
import { Progress } from '../../../components/Charts/Progress/Progress'
import { DataType, TablePaginationPosition, Columns } from './statistic.type'

const renderRating = (tags: string[]) =>
    tags.map(tag => <CustomAvatar percent={71} key={tag} />)

const columns: Columns<DataType> = [
    {
        title: 'Nombre Actividad',
        dataIndex: 'name',
        key: 'name',
        render: text => <Link to='#'>{text}</Link>,
    },
    { title: 'Descripción', dataIndex: 'address', key: 'address' },
    { title: 'progreso', key: 'action', render: _ => <Progress /> },
    { title: 'Calificación', key: 'tags', dataIndex: 'tags', render: renderRating },
]

const Statistics = () => {
    const [bottom, setBottom] = useState<TablePaginationPosition>('bottomCenter')

    return (
        <div>
            <div className='main-dashboard__div0'>
                <img src={iconUser} alt='user-percentage' />
                <Select
                    allowClear
                    bordered={false}
                    placeholder='Children name'
                    options={CHILD}
                />
            </div>
            <h1>Etapa 1</h1>
            <Table
                columns={columns}
                pagination={{ position: [bottom] }}
                dataSource={DATA}
            />
        </div>
    )
}

export default Statistics
