import { Loading } from '../../../utils/types/generics.type'
import {
  SignUpGenders,
  SignUpTypeDocument,
} from '../../../views/Public/SignUp/signUp.types'

export type LegalInformationProps = {
  genders: SignUpGenders[]
  typeDocuments: SignUpTypeDocument[]
} & Loading
