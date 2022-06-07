import { makeAutoObservable } from 'mobx'

import { GetCharactersVars } from 'src/apollo/types'

const characterInitialState: GetCharactersVars = {
  name: '',
  species: '',
  status: '',
  gender: '',
}

export class CharacterStore {
  initialState = characterInitialState
  params = characterInitialState
  isFiltered = false

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true })
  }

  setParams(options: Partial<GetCharactersVars>, isFiltered: boolean) {
    this.params = {
      ...this.params,
      ...options,
    }
    this.isFiltered = isFiltered
  }
}
