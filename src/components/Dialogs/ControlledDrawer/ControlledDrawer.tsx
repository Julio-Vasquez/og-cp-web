import { Drawer } from 'antd'
import { cloneElement, FC } from 'react'

import {
    ControlledDrawerDefaultProps,
    ControlledDrawerProps,
    ControlledDrawerPropTypes,
} from './drawer.types'

const ControlledDrawer: FC<ControlledDrawerProps> = ({
    visibleState,
    children,
    placement,
    width,
    destroyOnClose,
}) => {
    const { visible, closeDialog } = visibleState

    const newChildren = cloneElement(children || <></>, {
        closeDialog,
    })

    return (
        <Drawer
            open={visible}
            destroyOnClose={destroyOnClose}
            onClose={closeDialog}
            width={width}
            placement={placement}
        >
            {newChildren}
        </Drawer>
    )
}
ControlledDrawer.propTypes = ControlledDrawerPropTypes

ControlledDrawer.defaultProps = ControlledDrawerDefaultProps

export default ControlledDrawer
