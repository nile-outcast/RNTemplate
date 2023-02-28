import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

import {
  CoreCharacterFields,
  CoreEpisodeFields,
  CoreInfoFields,
} from '../../apollo/fragments.generated'
import type * as Types from '../../apollo/types'

const defaultOptions = {} as const
export type GetEpisodesVariables = Types.Exact<{
  page?: Types.InputMaybe<Types.Scalars['Int']>
  name: Types.Scalars['String']
  episode: Types.Scalars['String']
}>

export type GetEpisodes = {
  episodes: Types.Maybe<{
    info: Types.Maybe<Pick<Types.Info, 'pages' | 'next'>>
    results: Types.Maybe<
      Array<
        Types.Maybe<Pick<Types.Episode, 'id' | 'name' | 'air_date' | 'episode'>>
      >
    >
  }>
}

export type GetFullEpisodeVariables = Types.Exact<{
  id: Types.Scalars['ID']
}>

export type GetFullEpisode = {
  episode: Types.Maybe<
    Pick<Types.Episode, 'id' | 'name' | 'air_date' | 'episode'> & {
      characters: Array<
        Types.Maybe<Pick<Types.Character, 'id' | 'name' | 'status' | 'image'>>
      >
    }
  >
}

export const GetEpisodesDocument = gql`
  query GetEpisodes($page: Int, $name: String!, $episode: String!) {
    episodes(page: $page, filter: { name: $name, episode: $episode }) {
      info {
        ...CoreInfoFields
      }
      results {
        ...CoreEpisodeFields
      }
    }
  }
  ${CoreInfoFields}
  ${CoreEpisodeFields}
`

export function useGetEpisodes(
  baseOptions: Apollo.QueryHookOptions<GetEpisodes, GetEpisodesVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetEpisodes, GetEpisodesVariables>(
    GetEpisodesDocument,
    options,
  )
}

export function useGetEpisodesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetEpisodes, GetEpisodesVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetEpisodes, GetEpisodesVariables>(
    GetEpisodesDocument,
    options,
  )
}
export type GetEpisodesHookResult = ReturnType<typeof useGetEpisodes>
export type GetEpisodesLazyQueryHookResult = ReturnType<
  typeof useGetEpisodesLazyQuery
>
export type GetEpisodesQueryResult = Apollo.QueryResult<
  GetEpisodes,
  GetEpisodesVariables
>
export const GetFullEpisodeDocument = gql`
  query GetFullEpisode($id: ID!) {
    episode(id: $id) {
      ...CoreEpisodeFields
      characters {
        ...CoreCharacterFields
      }
    }
  }
  ${CoreEpisodeFields}
  ${CoreCharacterFields}
`

export function useGetFullEpisode(
  baseOptions: Apollo.QueryHookOptions<GetFullEpisode, GetFullEpisodeVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetFullEpisode, GetFullEpisodeVariables>(
    GetFullEpisodeDocument,
    options,
  )
}

export function useGetFullEpisodeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetFullEpisode,
    GetFullEpisodeVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetFullEpisode, GetFullEpisodeVariables>(
    GetFullEpisodeDocument,
    options,
  )
}
export type GetFullEpisodeHookResult = ReturnType<typeof useGetFullEpisode>
export type GetFullEpisodeLazyQueryHookResult = ReturnType<
  typeof useGetFullEpisodeLazyQuery
>
export type GetFullEpisodeQueryResult = Apollo.QueryResult<
  GetFullEpisode,
  GetFullEpisodeVariables
>
