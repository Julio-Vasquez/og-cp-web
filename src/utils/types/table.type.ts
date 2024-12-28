import type { TableProps, TableColumnsType } from 'antd'

export type Columns<T extends Record<string | number | symbol, any>> =
  TableColumnsType<T>

type TablePagination<T extends object> = NonNullable<
  Exclude<TableProps<T>['pagination'], boolean>
>

export type TablePaginationPosition = NonNullable<
  TablePagination<any>['position']
>[number]
