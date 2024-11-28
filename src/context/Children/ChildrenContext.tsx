import { createContext } from 'react'

import { type State } from './types'
import { initialState } from './reducer'

export const ChildrenContext = createContext<State>(initialState)
