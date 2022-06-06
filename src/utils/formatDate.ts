export const formatDate = (date, { includeTime } = {}) => {
  const config = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }

  if (includeTime) {
    config.hour = 'numeric'
    config.minute = 'numeric'
  }

  return new Date(String(date)).toLocaleDateString('en-CA', config)
}
