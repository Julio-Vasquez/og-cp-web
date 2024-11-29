import { Modal } from 'antd'
import { FC } from 'react'
import { ModalsProps } from './Modals.type'

export const Modals: FC<ModalsProps> = ({
    closeDialog,
    visible,
    title,
    loading,
}) => {
    return (
        <Modal
            title={title}
            open={visible}
            loading={loading}
            onCancel={closeDialog}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
        ></Modal>
    )
}
