import propTypes from 'prop-types'

export const ThemeData = {
    setData: propTypes.func.isRequired,
    data: propTypes.shape({
        colorPrimary: propTypes.string.isRequired,
        borderRadius: propTypes.number,
    }).isRequired,
}

export const ThemeDataDefault = {
    setData: () => {},
    data: { colorPrimary: '#1677FF' },
}

export type ThemeData = propTypes.InferProps<typeof ThemeData>
export type ThemeDataDefault = propTypes.InferProps<typeof ThemeDataDefault>
