import propTypes from 'prop-types'

export const ControlledDrawerPropTypes = {
    visibleState: propTypes.shape({
        visible: propTypes.bool.isRequired,
        closeDialog: propTypes.func.isRequired,
        openDialog: propTypes.func,
    }).isRequired,
    placement: propTypes.any.isRequired,
    children: propTypes.element,
    width: propTypes.number.isRequired,
    destroyOnClose: propTypes.bool.isRequired,
}

export const ControlledDrawerDefaultProps = {
    width: 450,
    destroyOnClose: false,
    placement: 'right',
}

export type ControlledDrawerProps = propTypes.InferProps<typeof ControlledDrawerPropTypes>
