import { Dayjs } from 'dayjs'
import { forwardRef } from 'react'
import { PickerTimeProps } from 'antd/es/date-picker/generatePicker'

import { DatePicker } from './DatePicker'

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {}

const TimePicker = forwardRef<any, TimePickerProps>((props, ref) => {
    return <DatePicker {...props} picker='time' mode={undefined} ref={ref} />
})

TimePicker.displayName = 'TimePicker'

export { TimePicker }
export default TimePicker
