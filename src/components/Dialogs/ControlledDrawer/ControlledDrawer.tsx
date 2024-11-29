import { Drawer } from 'antd'
import { cloneElement, FC } from 'react'

import {
    Placement,
    ControlledDrawerDefaultProps,
    ControlledDrawerProps,
    ControlledDrawerPropTypes,
} from './drawer.types'

export const ControlledDrawer: FC<ControlledDrawerProps> = ({
    visibleState,
    children,
    placement = 'right',
    width = 450,
    destroyOnClose = true,
}) => {
    const { visible, closeDialog } = visibleState

    const newChildren = cloneElement(children || <></>, {
        closeDialog,
    })

    return (
        <Drawer
            open={visible}
            destroyOnClose={destroyOnClose ?? true}
            onClose={closeDialog}
            width={width ?? 450}
            placement={placement as Placement}
        >
            {newChildren}
        </Drawer>
    )
}
ControlledDrawer.propTypes = ControlledDrawerPropTypes

ControlledDrawer.defaultProps = ControlledDrawerDefaultProps

export default ControlledDrawer
