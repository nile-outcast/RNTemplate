import { makeVar, useReactiveVar } from '@apollo/client'

import type { GetCharactersVariables } from './character-queries.generated'

const characterInitVar: GetCharactersVariables = {
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
