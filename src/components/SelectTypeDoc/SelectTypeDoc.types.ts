import propTypes from 'prop-types'

export const SelectTypeDocPropTypes = {
    identification: propTypes.number,
    typDocument: propTypes.string,
}

export const SelectTypeDocDefaultProps = {
    identification: 0,
    typDocument: '',
}

export type SelectTypeDocProps = propTypes.InferProps<typeof SelectTypeDocPropTypes>
