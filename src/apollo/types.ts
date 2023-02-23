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
  id: string
  name: string
  air_date: string
  episode: string
}

export type CoreLocation = {
  id: string
  name: string
  type: string
}

export type Characters = {
  info: CoreInfo
  results: CoreCharacter[]
}

export type Episodes = {
  info: CoreInfo
  results: CoreEpisode[]
}

export type Locations = {
  info: CoreInfo
  results: CoreLocation[]
}

export type GetCharactersVars = Omit<CoreCharacter, 'id' | 'image'> & {
  page?: number
  species: string
  gender: string
}

export type GetLocationsVars = Omit<CoreLocation, 'id'> & {
  page?: number
  dimension: string
}
