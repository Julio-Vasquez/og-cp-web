export type Field = {
  field: string
}

export type MinProps = { min: number } & Field

export type MaxProps = { max: number } & Field

export type MatchPassword = {
  getFieldValue: (name: string) => any
  field: string
}
