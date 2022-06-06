import { cloneElement } from 'react'
import { Modal } from 'antd'

const ControlledModal = ({
  visibleState,
  children,
  destroyOnClose,
  width,
  closable,
  centered,
  title,
  footer,
  notCancelable,
  inheritCloseToChildren,
  ...props
}) => {
  const { visible, closeDialog } = visibleState

  const newChildren = inheritCloseToChildren
    ? cloneElement(children || <></>, {
        closeDialog,
      })
    : children

  const onCancel = notCancelable ? () => {} : closeDialog

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      destroyOnClose={destroyOnClose}
      closable={closable}
      centered={centered}
      title={title}
      width='95%'
      style={{ maxWidth: width }}
      footer={footer}
      {...props}
    >
      {newChildren}
    </Modal>
  )
}

ControlledModal.defaultProps = {
  centered: true,
  width: 420,
  footer: null,
  inheritCloseToChildren: true,
}

export default ControlledModal
