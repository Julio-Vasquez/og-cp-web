import { FC } from 'react'
import { Progress } from 'antd'

import { ProgressProps } from './progress.type'

export const PercentProgress: FC<ProgressProps> = ({ percentage }) => (
    <Progress percent={percentage} />
)

export default PercentProgress
