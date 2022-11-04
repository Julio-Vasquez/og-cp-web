import { Dayjs } from 'dayjs'
import configGenerateDayJs from 'rc-picker/lib/generate/dayjs'
import generatePicker from 'antd/lib/date-picker/generatePicker'

import 'antd/es/date-picker/style/index'

export const DatePicker = generatePicker<Dayjs>(configGenerateDayJs)

export default DatePicker
