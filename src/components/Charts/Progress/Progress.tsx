import { FC } from 'react'
import { Progress } from 'antd'

import { ProgressProps } from './progress.type'

export const PercentProgress: FC<ProgressProps> = ({ percent }) => (
    <Progress percent={percent} />
)

export default PercentProgress
