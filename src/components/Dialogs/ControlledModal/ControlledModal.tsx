import { Modal } from 'antd'
import { cloneElement, FC } from 'react'

import { ControlledModalDefaultProps, ControlledModalProps } from './modal.types'
import { ControlledDrawerPropTypes } from '../ControlledDrawer/drawer.types'

export const ControlledModal: FC<ControlledModalProps> = ({
    visibleState,
    children,
    destroyOnClose,
    width,
    centered,
    title,

    inheritCloseToChildren,
}) => {
    const { visible, closeDialog } = visibleState

    const newChildren = inheritCloseToChildren
        ? cloneElement(children || <></>, { closeDialog })
        : children

    return (
        <Modal
            open={visible}
            onCancel={closeDialog}
            destroyOnClose={destroyOnClose ?? true}
            centered={centered}
            title={title}
            width={width ?? 450}
        >
            {newChildren}
        </Modal>
    )
}

ControlledModal.propTypes = ControlledDrawerPropTypes

ControlledModal.defaultProps = ControlledModalDefaultProps

export default ControlledModal
