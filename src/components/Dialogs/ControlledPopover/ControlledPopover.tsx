import { Popover } from 'antd'
import { cloneElement, FC } from 'react'

import { type ControlledPopoverProps } from './popover.types'

export const ControlledPopover: FC<ControlledPopoverProps> = ({
  visibleState,
  children,
  destroyOnClose = true,
  title,
  content,
  placement = 'leftTop',
  inheritCloseToChildren = true,
}) => {
  const { visible, closeDialog } = visibleState

  const newContent = inheritCloseToChildren
    ? cloneElement(content || <></>, { closeDialog })
    : content

  const onVisibleChange = (currVisible: boolean) => !currVisible && closeDialog()

  return (
    <Popover
      open={visible}
      content={newContent}
      title={title}
      destroyTooltipOnHide={destroyOnClose}
      onOpenChange={onVisibleChange}
      placement={placement}
      trigger='click'
    >
      {children}
    </Popover>
  )
}

export default ControlledPopover
