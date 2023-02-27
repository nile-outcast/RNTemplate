import { makeVar, useReactiveVar } from '@apollo/client'

import type { GetLocationsVariables } from './location-queries.generated'

const locationInitVar: GetLocationsVariables = {
  name: '',
  type: '',
  dimension: '',
}

export const setLocationVar = makeVar({
  initialState: locationInitVar,
  params: locationInitVar,
  isFiltered: false,
})

export const useLocationVar = () => useReactiveVar(setLocationVar)
