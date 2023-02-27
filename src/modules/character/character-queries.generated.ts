import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import {
  CoreCharacterFields,
  CoreInfoFields,
  CoreLocationFields,
} from '../../apollo/fragments.generated'
import { CoreEpisodeFields } from '../../apollo/fragments.generated'
import type * as Types from '../../apollo/types'

const defaultOptions = {} as const
export type GetCharactersVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  name: Types.Scalars['String']
  species: Types.Scalars['String']
  gender: Types.Scalars['String']
  status: Types.Scalars['String']
}>

export type GetCharacters = {
  characters: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<
        Types.Maybe<Pick<Types.Character, 'id' | 'name' | 'status' | 'image'>>
      >
    >
  }>
}

export type GetCharactersNamesVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  name: Types.Scalars['String']
}>

export type GetCharactersNames = {
  characters: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<Types.Maybe<Pick<Types.Character, 'id' | 'name'>>>
    >
  }>
}

export type GetCharactersSpeciesVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  species: Types.Scalars['String']
}>

export type GetCharactersSpecies = {
  characters: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<Types.Maybe<Pick<Types.Character, 'id' | 'species'>>>
    >
  }>
}

export type GetFullCharacterVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type GetFullCharacter = {
  character: Types.Maybe<
    Pick<
      Types.Character,
      'species' | 'type' | 'gender' | 'id' | 'name' | 'status' | 'image'
    > & {
      origin: Types.Maybe<Pick<Types.Location, 'name'>>
      location: Types.Maybe<Pick<Types.Location, 'id' | 'name' | 'type'>>
      episode: Array<
        Types.Maybe<Pick<Types.Episode, 'id' | 'name' | 'air_date' | 'episode'>>
      >
    }
  >
}

export const GetCharactersDocument = gql`
  query GetCharacters(
    $page: Int
    $name: String!
    $species: String!
    $gender: String!
    $status: String!
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
  ${CoreInfoFields}
  ${CoreCharacterFields}
`

export function useGetCharacters(
  baseOptions: Apollo.QueryHookOptions<GetCharacters, GetCharactersVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetCharacters, GetCharactersVariables>(
    GetCharactersDocument,
    options,
  )
}

export function useGetCharactersLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharacters,
    GetCharactersVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetCharacters, GetCharactersVariables>(
    GetCharactersDocument,
    options,
  )
}
export type GetCharactersHookResult = ReturnType<typeof useGetCharacters>
export type GetCharactersLazyQueryHookResult = ReturnType<
  typeof useGetCharactersLazyQuery
>
export type GetCharactersQueryResult = Apollo.QueryResult<
  GetCharacters,
  GetCharactersVariables
>
export const GetCharactersNamesDocument = gql`
  query GetCharactersNames($page: Int, $name: String!) {
    characters(page: $page, filter: { name: $name }) {
      info {
        ...CoreInfoFields
      }
      results {
        id
        name
      }
    }
  }
  ${CoreInfoFields}
`

export function useGetCharactersNames(
  baseOptions: Apollo.QueryHookOptions<
    GetCharactersNames,
    GetCharactersNamesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetCharactersNames, GetCharactersNamesVariables>(
    GetCharactersNamesDocument,
    options,
  )
}

export function useGetCharactersNamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersNames,
    GetCharactersNamesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetCharactersNames, GetCharactersNamesVariables>(
    GetCharactersNamesDocument,
    options,
  )
}
export type GetCharactersNamesHookResult = ReturnType<
  typeof useGetCharactersNames
>
export type GetCharactersNamesLazyQueryHookResult = ReturnType<
  typeof useGetCharactersNamesLazyQuery
>
export type GetCharactersNamesQueryResult = Apollo.QueryResult<
  GetCharactersNames,
  GetCharactersNamesVariables
>
export const GetCharactersSpeciesDocument = gql`
  query GetCharactersSpecies($page: Int, $species: String!) {
    characters(page: $page, filter: { species: $species }) {
      info {
        ...CoreInfoFields
      }
      results {
        id
        species
      }
    }
  }
  ${CoreInfoFields}
`

export function useGetCharactersSpecies(
  baseOptions: Apollo.QueryHookOptions<
    GetCharactersSpecies,
    GetCharactersSpeciesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetCharactersSpecies, GetCharactersSpeciesVariables>(
    GetCharactersSpeciesDocument,
    options,
  )
}

export function useGetCharactersSpeciesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCharactersSpecies,
    GetCharactersSpeciesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    GetCharactersSpecies,
    GetCharactersSpeciesVariables
  >(GetCharactersSpeciesDocument, options)
}
export type GetCharactersSpeciesHookResult = ReturnType<
  typeof useGetCharactersSpecies
>
export type GetCharactersSpeciesLazyQueryHookResult = ReturnType<
  typeof useGetCharactersSpeciesLazyQuery
>
export type GetCharactersSpeciesQueryResult = Apollo.QueryResult<
  GetCharactersSpecies,
  GetCharactersSpeciesVariables
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
        ...CoreLocationFields
      }
      episode {
        ...CoreEpisodeFields
      }
    }
  }
  ${CoreCharacterFields}
  ${CoreLocationFields}
  ${CoreEpisodeFields}
`

export function useGetFullCharacter(
  baseOptions: Apollo.QueryHookOptions<
    GetFullCharacter,
    GetFullCharacterVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetFullCharacter, GetFullCharacterVariables>(
    GetFullCharacterDocument,
    options,
  )
}

export function useGetFullCharacterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFullCharacter,
    GetFullCharacterVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetFullCharacter, GetFullCharacterVariables>(
    GetFullCharacterDocument,
    options,
  )
}
export type GetFullCharacterHookResult = ReturnType<typeof useGetFullCharacter>
export type GetFullCharacterLazyQueryHookResult = ReturnType<
  typeof useGetFullCharacterLazyQuery
>
export type GetFullCharacterQueryResult = Apollo.QueryResult<
  GetFullCharacter,
  GetFullCharacterVariables
>
