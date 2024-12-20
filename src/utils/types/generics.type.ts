import { ReactElement } from 'react'

export type Loading = {
  loading: boolean
}

export type Collapse = {
  collapsed: boolean
}

export type Children = {
  children: ReactElement
}

export type Dialogs = {
  visibleState: {
    visible: boolean
    closeDialog: () => void
    openDialog?: () => void
  }
  children?: ReactElement
  destroyOnClose?: boolean
}

export type Status = 'Activo' | 'Inactivo' | 'Pendiente'
