import { ReactElement } from 'react'

export type HeaderPrivateProps = {
  setCollapsed: (value: boolean | ((prev: boolean) => boolean)) => void
  children?: ReactElement
  collapsed: boolean
}
