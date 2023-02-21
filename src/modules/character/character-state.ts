import { makeVar, useReactiveVar } from '@apollo/client'

import { GetCharactersVars } from 'src/apollo/types'

const characterInitVar: GetCharactersVars = {
  name: '',
  species: '',
  status: '',
  gender: '',
}

export const setCharacterVar = makeVar({
  initialState: characterInitVar,
  params: characterInitVar,
  isFiltered: false,
})

export const useCharacterVar = () => useReactiveVar(setCharacterVar)
