import { Select, Table } from 'antd'
import { Link } from 'react-router-dom'

import CustomAvatar from '../../../components/Avatars/CustomAvatar'

import { DataType } from './statistic.type'
import useIntl from '../../../hooks/useIntl'
import iconUser from '../../../assets/svg/iconUser.svg'
import { Columns } from '../../../utils/types/table.type'
import { ACTIVITIES } from '../../../utils/mocks/mockActivities'
import { PercentProgress } from '../../../components/Charts/Progress/Progress'
import { CHILD, CATEGORIES_ACTIVITY } from '../../../utils/mocks/mockStatistics'

import './Statistics.scss'

const Statistics = () => {
    const { formatMessage } = useIntl()
    const renderRating = (_: any, i: any) => (
        <CustomAvatar percent={i.percentage} key={i.key} />
    )

    const { APD } = ACTIVITIES

    const renderProgress = (_: any, i: DataType) => (
        <PercentProgress percent={i.percentage} />
    )

    const columns: Columns<DataType> = [
        {
            title: 'Etapa',
            align: 'center',
            dataIndex: 'name',
            width: '15%',
            key: 'name',
            render: (text, record) => (
                <Link to={'/statistics/detail/' + record.name}>{text}</Link>
            ),
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

    return (
        <div className='main-statistics'>
            <div className='main-statistics__children'>
                <div>
                    <img src={iconUser} alt='user-percentage' />
                    <Select
                        defaultValue={CHILD[0]}
                        allowClear
                        bordered={false}
                        placeholder={formatMessage({
                            id: 'text.childBySelect',
                            objVars: {
                                field: formatMessage({ id: 'text.name' }),
                            },
                        })}
                        options={CHILD}
                    />
                </div>
                <Select
                    bordered={false}
                    defaultValue={CATEGORIES_ACTIVITY[0]}
                    className='main-statistics__category'
                    allowClear
                    placeholder={formatMessage({ id: 'text.category' })}
                    options={CATEGORIES_ACTIVITY}
                />
            </div>
            <Table
                scroll={{ x: 100 }}
                columns={columns}
                pagination={{ pageSize: 5 }}
                dataSource={APD.etapa}
                rowKey={row => row.key}
            />
        </div>
    )
}

export default Statistics
