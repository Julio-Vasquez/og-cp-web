export type state = {
    loading: boolean
    error?: boolean
    data?: []
}

type baseHook = {
    cancelError?: boolean
    onCompleted: Function
    onError?: Function
}

type queryType<T> = Omit<baseHook, 'onCompleted'> & {
    variables?: T
    cancelFirstEffect: Function
}

type func = { functionFetch: Function }

export { baseHook as mutationType, queryType, func }
