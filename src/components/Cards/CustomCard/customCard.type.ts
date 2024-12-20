export type CustomCardProps = {
  image?: string
  title?: string
  visible?: boolean
  ellipsis?: boolean
  openDialog?: () => void
  closeDialog?: () => void
  percentage?: number
  description?: string
  loading: boolean
  className: string
}
