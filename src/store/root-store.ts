import { createContext, useContext } from 'react'

import { CharacterStore } from './character-store'

class RootStore {
  characterStore: CharacterStore

  constructor() {
    this.characterStore = new CharacterStore()
  }
}

export const rootStore = new RootStore()

export const RootStoreContext = createContext(rootStore)
export const useRootStore = () => useContext(RootStoreContext)
