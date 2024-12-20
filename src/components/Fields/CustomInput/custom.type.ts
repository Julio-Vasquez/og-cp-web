type CustomMap = {
  value: string
  label: string
}

export type CustomInputProps = {
  name: string | string[]
  customMap: CustomMap
  data: any[] | unknown[]
  props?: {
    id: string
    onChange: (value?: string) => void
    'aria-required': string
    value: string | number
  }
}
