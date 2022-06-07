import { makeVar, useReactiveVar } from '@apollo/client'

import { GetLocationsVars } from 'src/apollo/types'

const locationInitVar: GetLocationsVars = {
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
