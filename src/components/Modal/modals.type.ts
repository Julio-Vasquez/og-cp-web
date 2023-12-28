import propTypes from 'prop-types'
export const ModalsPropTypes = {
    isOpen: propTypes.bool.isRequired,
    openModal: propTypes.func.isRequired,
    closeModal: propTypes.func.isRequired,
    children: propTypes.element,
}

export type ModalsProps = propTypes.InferProps<typeof ModalsPropTypes>
