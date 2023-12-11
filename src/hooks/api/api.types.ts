export type state<T> = {
    loading: boolean
    error?: boolean
    data?: T
}

export type mutationType = {
    cancelError?: boolean
    onCompleted: Function
    onError?: Function
}

export type queryType<T> = Omit<mutationType, 'onCompleted'> & {
    variables?: T
    cancelFirstEffect?: Function
}

export type func = { functionFetch: Function }
