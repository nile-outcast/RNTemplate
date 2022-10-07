import React, { createContext, FC, useContext } from 'react'

import { CharacterStore } from './character-store'

class RootStore {
  characterStore: CharacterStore

  constructor() {
    this.characterStore = new CharacterStore()
  }
}

const rootStore = new RootStore()

const RootStoreContext = createContext(rootStore)

export const RootStoreProvider: FC = ({ children }) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
)

export const useRootStore = () => useContext(RootStoreContext)
