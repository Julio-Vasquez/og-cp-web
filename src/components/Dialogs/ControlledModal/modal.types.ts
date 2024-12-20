import { Dialogs } from '../../../utils/types/generics.type'

export type ControlledModalProps = {
  width?: number
  title: string
  centered?: boolean
  inheritCloseToChildren?: boolean
} & Dialogs
