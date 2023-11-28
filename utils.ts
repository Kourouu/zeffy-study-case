export const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleString('en-EN', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
}