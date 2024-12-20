import { Dialogs } from '../../../utils/types/generics.type'

export type Placement = 'left' | 'right' | 'top' | 'bottom'

export type ControlledDrawerProps = {
  placement?: Placement
  width: number
} & Dialogs
