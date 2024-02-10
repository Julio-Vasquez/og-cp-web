import { FC } from 'react'
import { Button, Modal } from 'antd'

import useIntl from '../../hooks/useIntl'
import { ModalsProps } from './modals.type'

import './Modals.scss'
import { CustomButton } from '../CustomButton/CustomButton'

export const Modals: FC<ModalsProps> = ({
    isOpen,
    openModal,
    closeModal,
    children,
}) => {
    const { formatMessage } = useIntl()

    return (
        <div className='main-modals'>
            <CustomButton
                onClick={openModal}
                children={formatMessage({
                    id: 'text.editUser',
                    objVars: { field: formatMessage({ id: 'text.username' }) },
                })}
            />
            <Modal
                title='Edit User'
                className='main-modals__modals'
                width={900}
                open={isOpen}
                onCancel={closeModal}
                okButtonProps={{ hidden: true }}
                cancelButtonProps={{ hidden: true }}
            >
                {children}
            </Modal>
        </div>
    )
}

export default Modals
