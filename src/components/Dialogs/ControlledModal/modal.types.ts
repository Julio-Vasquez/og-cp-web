import propTypes from 'prop-types'

export const ControlledModalPropTypes = {
    visibleState: propTypes.shape({
        visible: propTypes.bool.isRequired,
        closeDialog: propTypes.func.isRequired,
        openDialog: propTypes.func,
    }).isRequired,
    children: propTypes.element.isRequired,
    destroyOnClose: propTypes.bool,
    width: propTypes.number,
    centered: propTypes.bool.isRequired,
    title: propTypes.string.isRequired,
    inheritCloseToChildren: propTypes.bool.isRequired,
}

export const ControlledModalDefaultProps = {
    centered: true,
    inheritCloseToChildren: true,
}

export type ControlledModalProps = propTypes.InferProps<
    typeof ControlledModalPropTypes
>
