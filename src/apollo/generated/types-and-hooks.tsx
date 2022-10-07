import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

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
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The `Upload` scalar type represents a file upload. */
  Upload: any
}

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
}

export type Character = {
  __typename?: 'Character'
  /** Time at which the character was created in the database. */
  created: Maybe<Scalars['String']>
  /** Episodes in which this character appeared. */
  episode: Array<Maybe<Episode>>
  /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
  gender: Maybe<Scalars['String']>
  /** The id of the character. */
  id: Maybe<Scalars['ID']>
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: Maybe<Scalars['String']>
  /** The character's last known location */
  location: Maybe<Location>
  /** The name of the character. */
  name: Maybe<Scalars['String']>
  /** The character's origin location */
  origin: Maybe<Location>
  /** The species of the character. */
  species: Maybe<Scalars['String']>
  /** The status of the character ('Alive', 'Dead' or 'unknown'). */
  status: Maybe<Scalars['String']>
  /** The type or subspecies of the character. */
  type: Maybe<Scalars['String']>
}

export type Characters = {
  __typename?: 'Characters'
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Character>>>
}

export type Episode = {
  __typename?: 'Episode'
  /** The air date of the episode. */
  air_date: Maybe<Scalars['String']>
  /** List of characters who have been seen in the episode. */
  characters: Array<Maybe<Character>>
  /** Time at which the episode was created in the database. */
  created: Maybe<Scalars['String']>
  /** The code of the episode. */
  episode: Maybe<Scalars['String']>
  /** The id of the episode. */
  id: Maybe<Scalars['ID']>
  /** The name of the episode. */
  name: Maybe<Scalars['String']>
}

export type Episodes = {
  __typename?: 'Episodes'
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Episode>>>
}

export type FilterCharacter = {
  gender: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
  species: InputMaybe<Scalars['String']>
  status: InputMaybe<Scalars['String']>
  type: InputMaybe<Scalars['String']>
}

export type FilterEpisode = {
  episode: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
}

export type FilterLocation = {
  dimension: InputMaybe<Scalars['String']>
  name: InputMaybe<Scalars['String']>
  type: InputMaybe<Scalars['String']>
}

export type Info = {
  __typename?: 'Info'
  /** The length of the response. */
  count: Maybe<Scalars['Int']>
  /** Number of the next page (if it exists) */
  next: Maybe<Scalars['Int']>
  /** The amount of pages. */
  pages: Maybe<Scalars['Int']>
  /** Number of the previous page (if it exists) */
  prev: Maybe<Scalars['Int']>
}

export type Location = {
  __typename?: 'Location'
  /** Time at which the location was created in the database. */
  created: Maybe<Scalars['String']>
  /** The dimension in which the location is located. */
  dimension: Maybe<Scalars['String']>
  /** The id of the location. */
  id: Maybe<Scalars['ID']>
  /** The name of the location. */
  name: Maybe<Scalars['String']>
  /** List of characters who have been last seen in the location. */
  residents: Array<Maybe<Character>>
  /** The type of the location. */
  type: Maybe<Scalars['String']>
}

export type Locations = {
  __typename?: 'Locations'
  info: Maybe<Info>
  results: Maybe<Array<Maybe<Location>>>
}

export type Query = {
  __typename?: 'Query'
  /** Get a specific character by ID */
  character: Maybe<Character>
  /** Get the list of all characters */
  characters: Maybe<Characters>
  /** Get a list of characters selected by ids */
  charactersByIds: Maybe<Array<Maybe<Character>>>
  /** Get a specific episode by ID */
  episode: Maybe<Episode>
  /** Get the list of all episodes */
  episodes: Maybe<Episodes>
  /** Get a list of episodes selected by ids */
  episodesByIds: Maybe<Array<Maybe<Episode>>>
  /** Get a specific locations by ID */
  location: Maybe<Location>
  /** Get the list of all locations */
  locations: Maybe<Locations>
  /** Get a list of locations selected by ids */
  locationsByIds: Maybe<Array<Maybe<Location>>>
}

export type QueryCharacterArgs = {
  id: Scalars['ID']
}

export type QueryCharactersArgs = {
  filter: InputMaybe<FilterCharacter>
  page: InputMaybe<Scalars['Int']>
}

export type QueryCharactersByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryEpisodeArgs = {
  id: Scalars['ID']
}

export type QueryEpisodesArgs = {
  filter: InputMaybe<FilterEpisode>
  page: InputMaybe<Scalars['Int']>
}

export type QueryEpisodesByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type QueryLocationArgs = {
  id: Scalars['ID']
}

export type QueryLocationsArgs = {
  filter: InputMaybe<FilterLocation>
  page: InputMaybe<Scalars['Int']>
}

export type QueryLocationsByIdsArgs = {
  ids: Array<Scalars['ID']>
}

export type GetCharactersQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>
  name: InputMaybe<Scalars['String']>
  species: InputMaybe<Scalars['String']>
  gender: InputMaybe<Scalars['String']>
  status: InputMaybe<Scalars['String']>
}>

export type GetCharactersQuery = {
  __typename?: 'Query'
  characters: {
    __typename?: 'Characters'
    info: { __typename?: 'Info'; pages: number; next: number }
    results: Array<{
      __typename?: 'Character'
      id: string
      name: string
      status: string
      image: string
    }>
  }
}

export type GetCharactersNameQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>
  name: InputMaybe<Scalars['String']>
}>

export type GetCharactersNameQuery = {
  __typename?: 'Query'
  characters: {
    __typename?: 'Characters'
    info: { __typename?: 'Info'; pages: number; next: number }
    results: Array<{ __typename?: 'Character'; name: string }>
  }
}

export type GetCharactersSpeciesQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>
  species: InputMaybe<Scalars['String']>
}>

export type GetCharactersSpeciesQuery = {
  __typename?: 'Query'
  characters: {
    __typename?: 'Characters'
    info: { __typename?: 'Info'; pages: number; next: number }
    results: Array<{ __typename?: 'Character'; species: string }>
  }
}

export type GetFullCharacterQueryVariables = Exact<{
  id: Scalars['ID']
}>

export type GetFullCharacterQuery = {
  __typename?: 'Query'
  character: {
    __typename?: 'Character'
    species: string
    type: string
    gender: string
    id: string
    name: string
    status: string
    image: string
    origin: { __typename?: 'Location'; name: string }
    location: { __typename?: 'Location'; id: string; name: string }
    episode: Array<{
      __typename?: 'Episode'
      id: string
      name: string
      air_date: string
      episode: string
    }>
  }
}

export type CoreInfoFieldsFragment = {
  __typename?: 'Info'
  pages: number
  next: number
}

export type CoreCharacterFieldsFragment = {
  __typename?: 'Character'
  id: string
  name: string
  status: string
  image: string
}

export type CoreEpisodeFieldsFragment = {
  __typename?: 'Episode'
  id: string
  name: string
  air_date: string
  episode: string
}

export const CoreInfoFieldsFragmentDoc = gql`
  fragment CoreInfoFields on Info {
    pages
    next
  }
`
export const CoreCharacterFieldsFragmentDoc = gql`
  fragment CoreCharacterFields on Character {
    id
    name
    status
    image
  }
`
export const CoreEpisodeFieldsFragmentDoc = gql`
  fragment CoreEpisodeFields on Episode {
    id
    name
    air_date
    episode
  }
`
export const GetCharactersDocument = gql`
  query GetCharacters(
    $page: Int
    $name: String
    $species: String
    $gender: String
    $status: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        species: $species
        status: $status
        gender: $gender
      }
    ) {
      info {
        ...CoreInfoFields
      }
      results {
        ...CoreCharacterFields
      }
    }
  }
  ${CoreInfoFieldsFragmentDoc}
  ${CoreCharacterFieldsFragmentDoc}
`

/**
 * __useGetCharactersQuery__
 *
 * To run a query within a React component, call `useGetCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *      species: // value for 'species'
 *      gender: // value for 'gender'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetCharactersQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options,
  )
}

export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetCharactersQuery, GetCharactersQueryVariables>(
    GetCharactersDocument,
    options,
  )
}
export type GetCharactersQueryHookResult = ReturnType<
  typeof useGetCharactersQuery
>
export type GetCharactersLazyQueryHookResult = ReturnType<
  typeof useGetCharactersLazyQuery
>
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharactersQuery,
  GetCharactersQueryVariables
>
export const GetCharactersNameDocument = gql`
  query GetCharactersName($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        ...CoreInfoFields
      }
      results {
        name
      }
    }
  }
  ${CoreInfoFieldsFragmentDoc}
`

/**
 * __useGetCharactersNameQuery__
 *
 * To run a query within a React component, call `useGetCharactersNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersNameQuery({
 *   variables: {
 *      page: // value for 'page'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetCharactersNameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >(GetCharactersNameDocument, options)
}

export function useGetCharactersNameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    GetCharactersNameQuery,
    GetCharactersNameQueryVariables
  >(GetCharactersNameDocument, options)
}
export type GetCharactersNameQueryHookResult = ReturnType<
  typeof useGetCharactersNameQuery
>
export type GetCharactersNameLazyQueryHookResult = ReturnType<
  typeof useGetCharactersNameLazyQuery
>
export type GetCharactersNameQueryResult = Apollo.QueryResult<
  GetCharactersNameQuery,
  GetCharactersNameQueryVariables
>
export const GetCharactersSpeciesDocument = gql`
  query GetCharactersSpecies($page: Int, $species: String) {
    characters(page: $page, filter: { species: $species }) {
      info {
        ...CoreInfoFields
      }
      results {
        species
      }
    }
  }
  ${CoreInfoFieldsFragmentDoc}
`

/**
 * __useGetCharactersSpeciesQuery__
 *
 * To run a query within a React component, call `useGetCharactersSpeciesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCharactersSpeciesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCharactersSpeciesQuery({
 *   variables: {
 *      page: // value for 'page'
 *      species: // value for 'species'
 *   },
 * });
 */
export function useGetCharactersSpeciesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >(GetCharactersSpeciesDocument, options)
}

export function useGetCharactersSpeciesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    GetCharactersSpeciesQuery,
    GetCharactersSpeciesQueryVariables
  >(GetCharactersSpeciesDocument, options)
}
export type GetCharactersSpeciesQueryHookResult = ReturnType<
  typeof useGetCharactersSpeciesQuery
>
export type GetCharactersSpeciesLazyQueryHookResult = ReturnType<
  typeof useGetCharactersSpeciesLazyQuery
>
export type GetCharactersSpeciesQueryResult = Apollo.QueryResult<
  GetCharactersSpeciesQuery,
  GetCharactersSpeciesQueryVariables
>
export const GetFullCharacterDocument = gql`
  query GetFullCharacter($id: ID!) {
    character(id: $id) {
      ...CoreCharacterFields
      species
      type
      gender
      origin {
        name
      }
      location {
        id
        name
      }
      episode {
        ...CoreEpisodeFields
      }
    }
  }
  ${CoreCharacterFieldsFragmentDoc}
  ${CoreEpisodeFieldsFragmentDoc}
`

/**
 * __useGetFullCharacterQuery__
 *
 * To run a query within a React component, call `useGetFullCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFullCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFullCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFullCharacterQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetFullCharacterQuery,
    GetFullCharacterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetFullCharacterQuery, GetFullCharacterQueryVariables>(
    GetFullCharacterDocument,
    options,
  )
}

export function useGetFullCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFullCharacterQuery,
    GetFullCharacterQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    GetFullCharacterQuery,
    GetFullCharacterQueryVariables
  >(GetFullCharacterDocument, options)
}
export type GetFullCharacterQueryHookResult = ReturnType<
  typeof useGetFullCharacterQuery
>
export type GetFullCharacterLazyQueryHookResult = ReturnType<
  typeof useGetFullCharacterLazyQuery
>
export type GetFullCharacterQueryResult = Apollo.QueryResult<
  GetFullCharacterQuery,
  GetFullCharacterQueryVariables
>