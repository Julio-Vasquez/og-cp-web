import propTypes from 'prop-types'

export const ContactDataPropTypes = {
    typeDocuments: propTypes.array.isRequired,
    genders: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
}
export const ContactDataDefaultProps = {
    typeDocuments: [],
    genders: [],
}

export type ContactDataProps = propTypes.InferProps<typeof ContactDataPropTypes>
