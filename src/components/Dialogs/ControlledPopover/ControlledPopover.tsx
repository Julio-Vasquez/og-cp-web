import { cloneElement } from 'react'
import { Popover } from 'antd'

const ControlledPopover = ({
    visibleState,
    children,
    destroyOnClose,
    title,
    content,
    placement,
    ...props
}) => {
    const { visible, closeDialog } = visibleState

    const newContent = cloneElement(content || <></>, { closeDialog })

    const onVisibleChange = visible => !visible && closeDialog()

    return (
        <Popover
            visible={visible}
            content={newContent}
            title={title}
            destroyTooltipOnHide={destroyOnClose}
            onVisibleChange={onVisibleChange}
            placement={placement}
            trigger='click'
            {...props}
        >
            {children}
        </Popover>
    )
}

ControlledPopover.defaultProps = {}

export default ControlledPopover
