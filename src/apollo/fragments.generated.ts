import { gql } from '@apollo/client'

import type * as Types from './types'

export type CoreInfoFields = Pick<Types.Info, 'pages' | 'next'>

export type CoreCharacterFields = Pick<
  Types.Character,
  'id' | 'name' | 'status' | 'image'
>

export type CoreEpisodeFields = Pick<
  Types.Episode,
  'id' | 'name' | 'air_date' | 'episode'
>

export type CoreLocationFields = Pick<Types.Location, 'id' | 'name' | 'type'>

export const CoreInfoFields = gql`
  fragment CoreInfoFields on Info {
    pages
    next
  }
`
export const CoreCharacterFields = gql`
  fragment CoreCharacterFields on Character {
    id
    name
    status
    image
  }
`
export const CoreEpisodeFields = gql`
  fragment CoreEpisodeFields on Episode {
    id
    name
    air_date
    episode
  }
`
export const CoreLocationFields = gql`
  fragment CoreLocationFields on Location {
    id
    name
    type
  }
`
