import propTypes from 'prop-types'

export const LegalInformationPropTypes = {
  typeDocuments: propTypes.arrayOf(
    propTypes.shape({
      abbr: propTypes.string.isRequired,
      publicKey: propTypes.string.isRequired,
      typeDocument: propTypes.string.isRequired,
    })
  ).isRequired,
  genders: propTypes.array.isRequired,
  loading: propTypes.bool.isRequired,
}
export const LegalInformationDefaultProps = {
  typeDocuments: [],
  genders: [],
}

export type LegalInformationProps = propTypes.InferProps<
  typeof LegalInformationPropTypes
>
