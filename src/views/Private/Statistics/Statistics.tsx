import { useState } from 'react'
import { Select, Space, Table, Tag } from 'antd'
import type { TableProps } from 'antd'
import iconUser from '../../../assets/svg/iconUser.svg'
import { Progress } from '../../../components/Charts/Progress/Progress'
type ColumnsType<T extends object> = TableProps<T>['columns']
type TablePagination<T extends object> = NonNullable<
    Exclude<TableProps<T>['pagination'], boolean>
>
type TablePaginationPosition = NonNullable<TablePagination<any>['position']>[number]

interface DataType {
    key: string
    name: string
    percentage: number
    address: string
    tags: string[]
}

const columns: ColumnsType<DataType> = [
    {
        title: 'Nombre Actividad',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },

    {
        title: 'Descripción',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'progreso',
        key: 'action',
        render: (_, record) => <Progress />,
    },
    {
        title: 'Calificación',
        key: 'tags',
        dataIndex: 'tags',
        render: (tags: string[]) => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green'
                    if (tag === 'loser') {
                        color = 'volcano'
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    )
                })}
            </span>
        ),
    },
]

const data: DataType[] = [
    {
        key: '1',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Actividad',
        percentage: 42,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['cool', 'teacher'],
    },
    {
        key: '14',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['nice', 'developer'],
    },
    {
        key: '25',
        name: 'Actividad',
        percentage: 42,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['loser'],
    },
    {
        key: '36',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['cool', 'teacher'],
    },
    {
        key: '1',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Actividad',
        percentage: 42,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['cool', 'teacher'],
    },
    {
        key: '14',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['nice', 'developer'],
    },
    {
        key: '25',
        name: 'Actividad',
        percentage: 42,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['loser'],
    },
    {
        key: '36',
        name: 'Actividad',
        percentage: 32,
        address:
            'Lorem ipsum dolor sit amet consectetur adipiscing, elit duis consequat ridiculus mus, rhoncus nisl taciti litora at. ',
        tags: ['cool', 'teacher'],
    },
]

const Statistics = () => {
    const [bottom, setBottom] = useState<TablePaginationPosition>('bottomCenter')
    const child = ['Juan Miguel', 'Juan José', 'Juan Manuel']
    return (
        <div>
            <div className='main-dashboard__div0'>
                <img src={iconUser} alt='user-percentage' />
                <Select
                    allowClear
                    bordered={false}
                    placeholder='Children name'
                    options={child?.map(item => ({
                        value: item,
                        label: item,
                    }))}
                />
            </div>
            <h1>Etapa 1</h1>
            <Table
                columns={columns}
                pagination={{ position: [bottom] }}
                dataSource={data}
            />
        </div>
    )
}

export default Statistics
