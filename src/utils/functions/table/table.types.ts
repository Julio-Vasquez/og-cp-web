type DataType<T> = T
type DataIndex<T> = keyof DataType<T>

export type Props<T> = {
  title: string
  dataIndex: DataIndex<T>
}

export type TableConfig = {
  pagSize: number
  recordKey: string | number
  scrollX: string
}

export type Filter = {
  key: string
  filters: any[]
  defaultFilteredValue: any[]
}

export type Params = {
  isDate: boolean
  tag: string | number | any
  subTag: string | undefined | any
}
