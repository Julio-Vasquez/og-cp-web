import { Status } from '../../../utils/types/generics.type'
import { State } from '../../../utils/constants/state.enum'

export type StatusTagProps = {
  status: Status
}

type Values = { color: string; text: string }

export type StatusMap = Record<State, Values>
