export const capitalize = (str: string) =>
  str
    .split(' ')
    .map(w => `${w[0].toUpperCase()}${w.substring(1).toLowerCase()}`)
    .join(' ')

type reduce = {
  value: string
  maxLength: number
  ellipsis?: boolean
}

export const reduceString = ({ value, maxLength, ellipsis = true }: reduce) => {
  if (!value || !maxLength) return value
  if (value?.length <= maxLength) return value
  return value.slice(0, maxLength).concat(ellipsis ? '...' : '')
}

export const prepareLabelUrl = (str: string): string =>
  `${str.substring(0, 1).toLowerCase()}${str.substring(1, str.length)}`
