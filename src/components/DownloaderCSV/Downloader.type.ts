type Csv<D = unknown> = {
    data: D[]
}

type Columns = {
    align: string
    key: string
    render: any
    title: string
    width: number
}

export type { Csv, Columns }
