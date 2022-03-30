export type CoreInfo = {
  pages: number
  next: number
}

export type CoreCharacter = {
  id: string
  name: string
  status: string
  image: string
}

export type CoreEpisode = {
  id: number
  name: string
  air_date: string
  episode: string
}

export type CoreLocation = {
  id: number
  name: string
  type: string
}

export type Characters = {
  info: CoreInfo
  results: CoreCharacter[]
}
