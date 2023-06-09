import propTypes from 'prop-types'

export const ContactDataTypes = {
    typeDocuments: propTypes.array.isRequired,
    genders: propTypes.array.isRequired,
    loading: propTypes.bool.isRequired,
}

export type ContactDataProps = propTypes.InferProps<typeof ContactDataTypes>
