import { makeAutoObservable } from 'mobx'

type CharacterInitialState = {
  page: number
  name: string
  species: string
  status: string
  gender: string
}

const characterInitialState: CharacterInitialState = {
  page: 1,
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

  setParams(options: Partial<CharacterInitialState>, isFiltered: boolean) {
    this.params = {
      ...this.params,
      ...options,
    }
    this.isFiltered = isFiltered
  }
}
