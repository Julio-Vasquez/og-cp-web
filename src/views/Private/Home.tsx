import { Button, DatePicker, Pagination, Select, Space, TimePicker } from 'antd'

const { Option } = Select
const Home = () => {
    return (
        <Space
            direction='horizontal'
            size={[0, 16]}
            style={{
                width: '100%',
                paddingTop: 16,
                borderTop: `1px solid `,
            }}
        >
            <Button>aa</Button>
            <Pagination defaultCurrent={1} total={50} showSizeChanger />
            <Space wrap>
                <Select showSearch style={{ width: 200 }}>
                    <Option value='jack'>jack</Option>
                    <Option value='lucy'>lucy</Option>
                </Select>
                <DatePicker />
                <TimePicker />
            </Space>
        </Space>
    )
}

export default Home
