import configGenerateDayJs from 'rc-picker/lib/generate/dayjs'
import generatePicker from 'antd/lib/date-picker/generatePicker'
import 'antd/es/date-picker/style/index'

const DatePicker = generatePicker(configGenerateDayJs)

export default DatePicker
