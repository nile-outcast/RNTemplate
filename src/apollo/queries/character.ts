import { gql } from '@apollo/client'

import { CORE_CHARACTER_FIELDS, CORE_EPISODE_FIELDS } from './fragments'

export const GET_CHARACTERS = gql`
  ${CORE_CHARACTER_FIELDS}
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
        next
      }
      results {
        ...CoreCharacterFields
      }
    }
  }
`

export const GET_FULL_CHARACTER = gql`
  ${CORE_CHARACTER_FIELDS}
  ${CORE_EPISODE_FIELDS}
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
`
