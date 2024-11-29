import propTypes from 'prop-types'
export const ModalsProps = {
    title: propTypes.string.isRequired,
    loading: propTypes.bool.isRequired,
    visible: propTypes.bool.isRequired,
    closeDialog: propTypes.func.isRequired,
}

export const ModalsPropsDefaults = {
    title: propTypes.string.isRequired,
    loading: false,
    visible: false,
    closeDialog: () => {},
}

export type ModalsProps = propTypes.InferProps<typeof ModalsProps>
