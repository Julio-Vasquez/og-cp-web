type BaseData = {
    src: string
} & NotificationData

type NotificationData = {
    count?: number
    color?: string
}

type LogoutData = {
    onClick: () => void
}

export type Data = BaseData | (BaseData & (NotificationData | LogoutData))
