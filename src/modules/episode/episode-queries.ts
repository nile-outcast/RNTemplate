import { gql } from '@apollo/client'

import {
  CORE_CHARACTER_FIELDS,
  CORE_EPISODE_FIELDS,
  CORE_INFO_FIELDS,
} from 'src/apollo/fragments'

export const GET_EPISODES = gql`
  ${CORE_EPISODE_FIELDS}
  ${CORE_INFO_FIELDS}
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
`
// export const GET_LOCATIONS_NAMES = gql`
//   ${CORE_INFO_FIELDS}
//   query GetLocationsNames($page: Int, $name: String!) {
//     locations(page: $page, filter: { name: $name }) {
//       info {
//         ...CoreInfoFields
//       }
//       results {
//         id
//         name
//       }
//     }
//   }
// `

// export const GET_LOCATIONS_TYPES = gql`
//   ${CORE_INFO_FIELDS}
//   query GetLocationsTypes($page: Int, $type: String!) {
//     locations(page: $page, filter: { type: $type }) {
//       info {
//         ...CoreInfoFields
//       }
//       results {
//         id
//         type
//       }
//     }
//   }
// `

// export const GET_LOCATIONS_DIMENSIONS = gql`
//   ${CORE_INFO_FIELDS}
//   query GetLocationsDimensions($page: Int, $dimension: String!) {
//     locations(page: $page, filter: { dimension: $dimension }) {
//       info {
//         ...CoreInfoFields
//       }
//       results {
//         id
//         dimension
//       }
//     }
//   }
// `

export const GET_FULL_EPISODE = gql`
  ${CORE_CHARACTER_FIELDS}
  ${CORE_EPISODE_FIELDS}
  query GetFullEpisode($id: ID!) {
    episode(id: $id) {
      ...CoreEpisodeFields
      characters {
        ...CoreCharacterFields
      }
    }
  }
`
