import { FC, useMemo, useReducer } from 'react'

import { initialState, reducer } from './reducer'
import { ChildrenContext } from './ChildrenContext'
import { type ChildrenContextProps } from './types'

export const ChildrenProvider: FC<ChildrenContextProps> = ({ children, value }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...value })

  const data = useMemo(() => ({ ...state, dispatch }), [state])

  return <ChildrenContext.Provider value={data}>{children}</ChildrenContext.Provider>
}
