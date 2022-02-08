import { gql } from '@apollo/client'

import {
  CORE_CHARACTER_FIELDS,
  CORE_EPISODE_FIELDS,
  CORE_INFO_FIELDS,
} from './fragments'

export const GET_CHARACTERS = gql`
  ${CORE_CHARACTER_FIELDS}
  ${CORE_INFO_FIELDS}
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
`
export const GET_CHARACTERS_NAME = gql`
  ${CORE_INFO_FIELDS}
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
`
export const GET_CHARACTERS_SPECIES = gql`
  ${CORE_INFO_FIELDS}
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
