import { createContext, useContext } from 'react'

import { SearchState } from 'src/types'

const initialState: SearchState = {
  results: [],
  value: '',
  setValue: () => undefined,
  reloader: () => undefined,
}

export const SearchContex = createContext(initialState)

export const useSearchContex = () => useContext(SearchContex)
