import { Dispatch, ReactElement } from 'react'

export enum ChildrenContextActions {
    ADD_CHILDREN = 'ADD_CHILDREN',
}

export type Values = {
    _idChildren: string
    nameChildren: string
    username: string
}

export type Action = {
    type: ChildrenContextActions
    payload: Values
}

export type State = {
    dispatch: Dispatch<Action>
    values: Values
}

export type ChildrenContextProps = {
    children: ReactElement
    value: State
}
