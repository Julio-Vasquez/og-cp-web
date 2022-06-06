export const reduceString = ({ value, maxLength, ellipsis }) => {
  if (!value || typeof value !== 'string' || !maxLength || value.length <= maxLength)
    return value

  const reducedString = value.slice(0, maxLength)

  return ellipsis ? reducedString + '...' : reducedString
}
