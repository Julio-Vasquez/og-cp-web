import { ReactElement } from 'react'

import { Dialogs } from '../../../utils/types/generics.type'

export type PopoverPlacement =
  | 'top'
  | 'left'
  | 'right'
  | 'bottom'
  | 'topLeft'
  | 'topRight'
  | 'bottomLeft'
  | 'bottomRight'
  | 'leftTop'
  | 'leftBottom'
  | 'rightTop'
  | 'rightBottom'

export type ControlledPopoverProps = {
  title: string
  content: ReactElement
  inheritCloseToChildren?: boolean
  placement: PopoverPlacement
} & Dialogs
