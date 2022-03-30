import { useQuery } from '@apollo/client'

import {
  Characters,
  CoreCharacter,
  CoreEpisode,
  CoreInfo,
  CoreLocation,
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

type GetCharactersVars = {
  page: number
  name: string
  species: string
  gender: string
  status: string
}

export const useGetCharacters = (vars: GetCharactersVars) => {
  return useQuery<GetCharactersData, GetCharactersVars>(GET_CHARACTERS, {
    variables: vars,
  })
}

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

export const useGetFullCharacter = (vars: GetFullCharacterVars) => {
  return useQuery<GetFullCharacterData, GetFullCharacterVars>(
    GET_FULL_CHARACTER,
    {
      variables: vars,
    },
  )
}

type GetCharactersNamesData = {
  characters: {
    info: CoreInfo
    results: {
      name: string
    }[]
  }
}

type GetCharactersNamesVars = {
  page: number
  name: string
}

export const useGetCharactersNames = (vars: GetCharactersNamesVars) => {
  return useQuery<GetCharactersNamesData, GetCharactersNamesVars>(
    GET_CHARACTERS_NAMES,
    {
      variables: vars,
    },
  )
}

type GetCharactersSpeciesData = {
  characters: {
    info: CoreInfo
    results: {
      species: string
    }[]
  }
}

type GetCharactersSpeciesVars = {
  page: number
  species: string
}

export const useGetCharactersSpecies = (vars: GetCharactersSpeciesVars) => {
  return useQuery<GetCharactersSpeciesData, GetCharactersSpeciesVars>(
    GET_CHARACTERS_SPECIES,
    {
      variables: vars,
    },
  )
}
