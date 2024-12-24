import { useContext } from 'react'

import type { State } from '../context/Children/types'
import { ChildrenContext } from '../context/Children/ChildrenContext'

export const useChildren = (): State => {
  const context = useContext(ChildrenContext)

  if (!context) throw new Error('useChildren must be used within a ChildrenProvider')

  return { ...context }
}
