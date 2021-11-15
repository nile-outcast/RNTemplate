import { gql } from '@apollo/client'

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
