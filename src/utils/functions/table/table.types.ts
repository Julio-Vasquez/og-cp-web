import { Key } from 'antd/lib/table/interface'

type DataType<T> = T
type DataIndex<T> = keyof DataType<T>

export type props<T> = {
  title: string
  dataIndex: DataIndex<T>
}

export type tableConfig = {
  pagSize: number
  recordKey: Key
  scrollX: string
}

export type filter = {
  key: string
  filters: any[]
  defaultFilteredValue: any[]
}

export type params = {
  isDate: boolean
  tag: string | number | any
  subTag: string | undefined | any
}
