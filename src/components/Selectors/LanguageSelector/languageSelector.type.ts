import propTypes from 'prop-types'

export const Props = {
    setLocal: propTypes.func.isRequired,
    locale: propTypes.object.isRequired,
}

export type Props = propTypes.InferProps<typeof Props>
