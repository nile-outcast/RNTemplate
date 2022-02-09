export const getTitleFormat = (title: string) =>
  title.length > 15 ? title.slice(0, 15) + '...' : title
