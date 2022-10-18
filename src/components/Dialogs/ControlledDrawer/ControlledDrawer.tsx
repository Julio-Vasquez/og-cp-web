import { cloneElement } from 'react'
import { Drawer } from 'antd'

const ControlledDrawer = ({
  visibleState,
  children,
  destroyOnClose,
  width,
  placement,
  closable,
  title,
  ...props
}) => {
  const { visible, closeDialog } = visibleState

  const newChildren = cloneElement(children || <></>, {
    closeDialog,
  })

  return (
    <Drawer
      visible={visible}
      onClose={closeDialog}
      destroyOnClose={destroyOnClose}
      placement={placement}
      closable={closable}
      title={title}
      contentWrapperStyle={{ width: '100%', maxWidth: width }}
      {...props}
    >
      {newChildren}
    </Drawer>
  )
}

ControlledDrawer.defaultProps = {
  placement: 'right',
  width: 800,
  closable: true,
}

export default ControlledDrawer
