import { gql } from '@apollo/client'

import {
  CORE_CHARACTER_FIELDS,
  CORE_INFO_FIELDS,
  CORE_LOCATION_FIELDS,
} from 'src/apollo/fragments'

export const GET_LOCATIONS = gql`
  ${CORE_LOCATION_FIELDS}
  ${CORE_INFO_FIELDS}
  query GetLocations(
    $page: Int
    $name: String
    $type: String
    $dimension: String
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
`
export const GET_LOCATIONS_NAMES = gql`
  ${CORE_INFO_FIELDS}
  query GetLocationsNames($page: Int, $name: String) {
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
`

export const GET_LOCATIONS_TYPES = gql`
  ${CORE_INFO_FIELDS}
  query GetLocationsTypes($page: Int, $type: String) {
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
`

export const GET_LOCATIONS_DIMENSIONS = gql`
  ${CORE_INFO_FIELDS}
  query GetLocationsDimensions($page: Int, $dimension: String) {
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
`

export const GET_FULL_LOCATION = gql`
  ${CORE_CHARACTER_FIELDS}
  ${CORE_LOCATION_FIELDS}
  query GetFullLocation($id: ID!) {
    location(id: $id) {
      ...CoreLocationFields
      dimension
      residents {
        ...CoreCharacterFields
      }
    }
  }
`
