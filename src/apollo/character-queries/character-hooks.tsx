import { useQuery } from '@apollo/client'

import {
  Characters,
  CoreCharacter,
  CoreEpisode,
  CoreInfo,
  CoreLocation,
  GetCharactersVars,
} from 'src/apollo/types'

import {
  GET_CHARACTERS,
  GET_CHARACTERS_NAMES,
  GET_CHARACTERS_SPECIES,
  GET_FULL_CHARACTER,
} from './character-queries'

type GetCharactersData = {
  characters: Characters
}

export const useGetCharacters = (vars: GetCharactersVars) =>
  useQuery<GetCharactersData, GetCharactersVars>(GET_CHARACTERS, {
    variables: vars,
  })

type GetFullCharacterData = {
  character: CoreCharacter & {
    species: string
    type: string
    gender: string
    origin: {
      name: string
    }
    location: CoreLocation
    episode: CoreEpisode[]
  }
}

type GetFullCharacterVars = {
  id: string
}

export const useGetFullCharacter = (vars: GetFullCharacterVars) =>
  useQuery<GetFullCharacterData, GetFullCharacterVars>(GET_FULL_CHARACTER, {
    variables: vars,
  })

type GetCharactersNamesData = {
  characters: {
    info: CoreInfo
    results: {
      name: string
    }[]
  }
}

type GetCharactersNamesVars = Pick<GetCharactersVars, 'page' | 'name'>

export const useGetCharactersNames = (vars: GetCharactersNamesVars) =>
  useQuery<GetCharactersNamesData, GetCharactersNamesVars>(
    GET_CHARACTERS_NAMES,
    {
      variables: vars,
    },
  )

type GetCharactersSpeciesData = {
  characters: {
    info: CoreInfo
    results: {
      species: string
    }[]
  }
}

type GetCharactersSpeciesVars = Pick<GetCharactersVars, 'page' | 'species'>

export const useGetCharactersSpecies = (vars: GetCharactersSpeciesVars) =>
  useQuery<GetCharactersSpeciesData, GetCharactersSpeciesVars>(
    GET_CHARACTERS_SPECIES,
    {
      variables: vars,
    },
  )
