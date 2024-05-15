export type Action = 'upgrade' | 'degrade'

export type Mutation = {
    username: string
    action: Action
}
export type Props = {
    username: string
    role: string
    onCompleted: () => void
}
