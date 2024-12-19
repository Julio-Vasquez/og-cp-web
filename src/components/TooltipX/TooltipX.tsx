import { Tooltip } from 'antd'
import { reduceString } from '../../utils/types/string.util'

type TooltipXProps = {
    title: string
    placement?: 'top' | 'bottom' | 'left' | 'right'
    color?: string
    ellipsis: boolean
    maxLength: number
    value: string
}

export const TooltipX = ({
    title,
    color,
    value,
    ellipsis,
    placement,
    maxLength,
}: TooltipXProps) => (
    <Tooltip title={title} placement={placement} color={color}>
        {reduceString({
            ellipsis,
            maxLength,
            value,
        })}
    </Tooltip>
)
