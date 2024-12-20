import { Modal } from 'antd'
import { cloneElement, FC } from 'react'

import { type ControlledModalProps } from './modal.types'

export const ControlledModal: FC<ControlledModalProps> = ({
  visibleState,
  children,
  destroyOnClose,
  width = 450,
  centered = true,
  title,
  inheritCloseToChildren = true,
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
      width={width}
    >
      {newChildren}
    </Modal>
  )
}

export default ControlledModal
