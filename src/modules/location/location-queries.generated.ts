import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import {
  CoreCharacterFields,
  CoreEpisodeFields,
  CoreInfoFields,
  CoreLocationFields,
} from '../../apollo/fragments.generated'
import type * as Types from '../../apollo/types'

const defaultOptions = {} as const
export type GetLocationsVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  name: Types.Scalars['String']
  type: Types.Scalars['String']
  dimension: Types.Scalars['String']
}>

export type GetLocations = {
  locations: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<Types.Maybe<Pick<Types.Location, 'id' | 'name' | 'type'>>>
    >
  }>
}

export type GetLocationsNamesVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  name: Types.Scalars['String']
}>

export type GetLocationsNames = {
  locations: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<Types.Maybe<Pick<Types.Location, 'id' | 'name'>>>
    >
  }>
}

export type GetLocationsTypesVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  type: Types.Scalars['String']
}>

export type GetLocationsTypes = {
  locations: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<Types.Maybe<Pick<Types.Location, 'id' | 'type'>>>
    >
  }>
}

export type GetLocationsDimensionsVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  dimension: Types.Scalars['String']
}>

export type GetLocationsDimensions = {
  locations: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<Types.Maybe<Pick<Types.Location, 'id' | 'dimension'>>>
    >
  }>
}

export type GetFullLocationVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type GetFullLocation = {
  location: Types.Maybe<
    Pick<Types.Location, 'dimension' | 'id' | 'name' | 'type'> & {
      residents: Array<
        Types.Maybe<Pick<Types.Character, 'id' | 'name' | 'status' | 'image'>>
      >
    }
  >
}

export const GetLocationsDocument = gql`
  query GetLocations(
    $page: Int
    $name: String!
    $type: String!
    $dimension: String!
  ) {
    locations(
      page: $page
      filter: { name: $name, type: $type, dimension: $dimension }
    ) {
      info {
        ...CoreInfoFields
      }
      results {
        ...CoreLocationFields
      }
    }
  }
  ${CoreInfoFields}
  ${CoreLocationFields}
`

export function useGetLocations(
  baseOptions: Apollo.QueryHookOptions<GetLocations, GetLocationsVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetLocations, GetLocationsVariables>(
    GetLocationsDocument,
    options,
  )
}

export function useGetLocationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocations,
    GetLocationsVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetLocations, GetLocationsVariables>(
    GetLocationsDocument,
    options,
  )
}
export type GetLocationsHookResult = ReturnType<typeof useGetLocations>
export type GetLocationsLazyQueryHookResult = ReturnType<
  typeof useGetLocationsLazyQuery
>
export type GetLocationsQueryResult = Apollo.QueryResult<
  GetLocations,
  GetLocationsVariables
>
export const GetLocationsNamesDocument = gql`
  query GetLocationsNames($page: Int, $name: String!) {
    locations(page: $page, filter: { name: $name }) {
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

export function useGetLocationsNames(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationsNames,
    GetLocationsNamesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetLocationsNames, GetLocationsNamesVariables>(
    GetLocationsNamesDocument,
    options,
  )
}

export function useGetLocationsNamesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsNames,
    GetLocationsNamesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetLocationsNames, GetLocationsNamesVariables>(
    GetLocationsNamesDocument,
    options,
  )
}
export type GetLocationsNamesHookResult = ReturnType<
  typeof useGetLocationsNames
>
export type GetLocationsNamesLazyQueryHookResult = ReturnType<
  typeof useGetLocationsNamesLazyQuery
>
export type GetLocationsNamesQueryResult = Apollo.QueryResult<
  GetLocationsNames,
  GetLocationsNamesVariables
>
export const GetLocationsTypesDocument = gql`
  query GetLocationsTypes($page: Int, $type: String!) {
    locations(page: $page, filter: { type: $type }) {
      info {
        ...CoreInfoFields
      }
      results {
        id
        type
      }
    }
  }
  ${CoreInfoFields}
`

export function useGetLocationsTypes(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationsTypes,
    GetLocationsTypesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetLocationsTypes, GetLocationsTypesVariables>(
    GetLocationsTypesDocument,
    options,
  )
}

export function useGetLocationsTypesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsTypes,
    GetLocationsTypesVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetLocationsTypes, GetLocationsTypesVariables>(
    GetLocationsTypesDocument,
    options,
  )
}
export type GetLocationsTypesHookResult = ReturnType<
  typeof useGetLocationsTypes
>
export type GetLocationsTypesLazyQueryHookResult = ReturnType<
  typeof useGetLocationsTypesLazyQuery
>
export type GetLocationsTypesQueryResult = Apollo.QueryResult<
  GetLocationsTypes,
  GetLocationsTypesVariables
>
export const GetLocationsDimensionsDocument = gql`
  query GetLocationsDimensions($page: Int, $dimension: String!) {
    locations(page: $page, filter: { dimension: $dimension }) {
      info {
        ...CoreInfoFields
      }
      results {
        id
        dimension
      }
    }
  }
  ${CoreInfoFields}
`

export function useGetLocationsDimensions(
  baseOptions: Apollo.QueryHookOptions<
    GetLocationsDimensions,
    GetLocationsDimensionsVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<
    GetLocationsDimensions,
    GetLocationsDimensionsVariables
  >(GetLocationsDimensionsDocument, options)
}

export function useGetLocationsDimensionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetLocationsDimensions,
    GetLocationsDimensionsVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<
    GetLocationsDimensions,
    GetLocationsDimensionsVariables
  >(GetLocationsDimensionsDocument, options)
}
export type GetLocationsDimensionsHookResult = ReturnType<
  typeof useGetLocationsDimensions
>
export type GetLocationsDimensionsLazyQueryHookResult = ReturnType<
  typeof useGetLocationsDimensionsLazyQuery
>
export type GetLocationsDimensionsQueryResult = Apollo.QueryResult<
  GetLocationsDimensions,
  GetLocationsDimensionsVariables
>
export const GetFullLocationDocument = gql`
  query GetFullLocation($id: ID!) {
    location(id: $id) {
      ...CoreLocationFields
      dimension
      residents {
        ...CoreCharacterFields
      }
    }
  }
  ${CoreLocationFields}
  ${CoreCharacterFields}
`

export function useGetFullLocation(
  baseOptions: Apollo.QueryHookOptions<
    GetFullLocation,
    GetFullLocationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetFullLocation, GetFullLocationVariables>(
    GetFullLocationDocument,
    options,
  )
}

export function useGetFullLocationLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFullLocation,
    GetFullLocationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetFullLocation, GetFullLocationVariables>(
    GetFullLocationDocument,
    options,
  )
}
export type GetFullLocationHookResult = ReturnType<typeof useGetFullLocation>
export type GetFullLocationLazyQueryHookResult = ReturnType<
  typeof useGetFullLocationLazyQuery
>
export type GetFullLocationQueryResult = Apollo.QueryResult<
  GetFullLocation,
  GetFullLocationVariables
>
