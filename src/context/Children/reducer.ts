import type { Action, State } from './types'
import { ChildrenContextActions } from './types'

const values = {
  _idChildren: '',
  nameChildren: '',
  username: '',
}

export const initialState: State = {
  values,
  dispatch: (action: Action) => action,
}

export const reducer = (state: State, action: Action) => {
  const { payload, type } = action

  switch (type) {
    case ChildrenContextActions.ADD_CHILDREN:
      return {
        ...state,
        values: payload,
      }

    default:
      throw new Error('Reducer says: Action type not found')
  }
}
