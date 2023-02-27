export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Upload: unknown
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Character = {
  created: Maybe<Scalars['String']>
  episode: Array<Maybe<Episode>>
  gender: Maybe<Scalars['String']>
  id: Maybe<Scalars['ID']>
  image: Maybe<Scalars['String']>
  location: Maybe<Location>
  name: Maybe<Scalars['String']>
  origin: Maybe<Location>
  species: Maybe<Scalars['String']>
  status: Maybe<Scalars['String']>
  type: Maybe<Scalars['String']>
}

export type Characters = {
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Character>>>
}

export type Episode = {
  air_date: Maybe<Scalars['String']>
  characters: Array<Maybe<Character>>
  created: Maybe<Scalars['String']>
  episode: Maybe<Scalars['String']>
  id: Maybe<Scalars['ID']>
  name: Maybe<Scalars['String']>
}

export type Episodes = {
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Episode>>>
}

export type FilterCharacter = {
  gender?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  species?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

export type FilterEpisode = {
  episode?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
}

export type FilterLocation = {
  dimension?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  type?: InputMaybe<Scalars['String']>
}

export type Info = {
  count: Maybe<Scalars['Int']>
  next: Maybe<Scalars['Int']>
  pages: Maybe<Scalars['Int']>
  prev: Maybe<Scalars['Int']>
}

export type Location = {
  created: Maybe<Scalars['String']>
  dimension: Maybe<Scalars['String']>
  id: Maybe<Scalars['ID']>
  name: Maybe<Scalars['String']>
  residents: Array<Maybe<Character>>
  type: Maybe<Scalars['String']>
}

export type Locations = {
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Location>>>
}

export type Query = {
  character: Maybe<Character>
  characters: Maybe<Characters>
  charactersByIds: Maybe<Array<Maybe<Character>>>
  episode: Maybe<Episode>
  episodes: Maybe<Episodes>
  episodesByIds: Maybe<Array<Maybe<Episode>>>
  location: Maybe<Location>
  locations: Maybe<Locations>
  locationsByIds: Maybe<Array<Maybe<Location>>>
}

export type QueryCharacterArgs = {
  id: Scalars['ID']
}

export type QueryCharactersArgs = {
  filter?: InputMaybe<FilterCharacter>
  page?: InputMaybe<Scalars['Int']>
}

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryEpisodeArgs = {
  id: Scalars['ID']
}

export type QueryEpisodesArgs = {
  filter?: InputMaybe<FilterEpisode>
  page?: InputMaybe<Scalars['Int']>
}

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryLocationArgs = {
  id: Scalars['ID']
}

export type QueryLocationsArgs = {
  filter?: InputMaybe<FilterLocation>
  page?: InputMaybe<Scalars['Int']>
}

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>
}
