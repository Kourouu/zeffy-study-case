export const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleString('fr-FR', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })
}