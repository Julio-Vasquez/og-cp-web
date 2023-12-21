import propTypes from 'prop-types'

export const ProviderTypeProps = {
    children: propTypes.oneOfType([
        propTypes.element.isRequired,
        propTypes.arrayOf(propTypes.element.isRequired).isRequired,
    ]).isRequired,
}

export type ProviderProps = propTypes.InferProps<typeof ProviderTypeProps>
