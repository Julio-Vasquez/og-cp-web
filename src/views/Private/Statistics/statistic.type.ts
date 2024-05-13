import type { TableProps } from 'antd'

export type Columns<T extends object> = TableProps<T>['columns']

type TablePagination<T extends object> = NonNullable<
    Exclude<TableProps<T>['pagination'], boolean>
>

export type TablePaginationPosition = NonNullable<
    TablePagination<any>['position']
>[number]

export type DataType = {
    key: string
    name: string
    percentage: number
    description: string
}
