import propTypes from 'prop-types'
export type Placement = 'left' | 'right' | 'top' | 'bottom'
export const ControlledDrawerPropTypes = {
    visibleState: propTypes.shape({
        visible: propTypes.bool.isRequired,
        closeDialog: propTypes.func.isRequired,
        openDialog: propTypes.func,
    }).isRequired,
    placement: propTypes.oneOf(['left', 'right', 'top', 'bottom']),
    children: propTypes.element.isRequired,
    width: propTypes.number,
    destroyOnClose: propTypes.bool,
}

export const ControlledDrawerDefaultProps = {
    width: 450,
    destroyOnClose: true,
    placement: 'right',
}

export type ControlledDrawerProps = propTypes.InferProps<
    typeof ControlledDrawerPropTypes
>
