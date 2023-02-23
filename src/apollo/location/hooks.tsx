import { useQuery } from '@apollo/client'

import {
  CoreCharacter,
  CoreInfo,
  CoreLocation,
  GetLocationsVars,
  Locations,
} from 'src/apollo/types'

import {
  GET_FULL_LOCATION,
  GET_LOCATIONS,
  GET_LOCATIONS_DIMENSIONS,
  GET_LOCATIONS_NAMES,
  GET_LOCATIONS_TYPES,
} from './queries'

type GetLocationsData = {
  locations: Locations
}

export const useGetLocations = (vars: GetLocationsVars) =>
  useQuery<GetLocationsData, GetLocationsVars>(GET_LOCATIONS, {
    variables: vars,
  })

type GetFullLocationData = {
  location: CoreLocation & {
    dimension: string
    residents: CoreCharacter[]
  }
}

type GetFullLocationVars = {
  id: string
}

export const useGetFullLocation = (vars: GetFullLocationVars) =>
  useQuery<GetFullLocationData, GetFullLocationVars>(GET_FULL_LOCATION, {
    variables: vars,
  })

type GetLocationsNamesData = {
  locations: {
    info: CoreInfo
    results: {
      name: string
    }[]
  }
}

type GetLocationsNamesVars = Pick<GetLocationsVars, 'page' | 'name'>

export const useGetLocationsNames = (vars: GetLocationsNamesVars) =>
  useQuery<GetLocationsNamesData, GetLocationsNamesVars>(GET_LOCATIONS_NAMES, {
    variables: vars,
  })

type GetLocationsTypesData = {
  locations: {
    info: CoreInfo
    results: {
      type: string
    }[]
  }
}

type GetLocationsTypesVars = Pick<GetLocationsVars, 'page' | 'type'>

export const useGetLocationsTypes = (vars: GetLocationsTypesVars) =>
  useQuery<GetLocationsTypesData, GetLocationsTypesVars>(GET_LOCATIONS_TYPES, {
    variables: vars,
  })

type GetLocationsDimensionsData = {
  locations: {
    info: CoreInfo
    results: {
      dimensions: string
    }[]
  }
}

type GetLocationsDimensionsVars = Pick<GetLocationsVars, 'page' | 'dimension'>

export const useGetLocationsDimensions = (vars: GetLocationsDimensionsVars) =>
  useQuery<GetLocationsDimensionsData, GetLocationsDimensionsVars>(
    GET_LOCATIONS_DIMENSIONS,
    {
      variables: vars,
    },
  )
