import { gql } from '@apollo/client'

export const CORE_INFO_FIELDS = gql`
  fragment CoreInfoFields on Info {
    pages
    next
  }
`

export const CORE_CHARACTER_FIELDS = gql`
  fragment CoreCharacterFields on Character {
    id
    name
    status
    image
  }
`

export const CORE_EPISODE_FIELDS = gql`
  fragment CoreEpisodeFields on Episode {
    id
    name
    air_date
    episode
  }
`

export const CORE_LOCATION_FIELDS = gql`
  fragment CoreLocationFields on Location {
    id
    name
    type
  }
`
