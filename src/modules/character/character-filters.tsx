import React, { FC, useState } from 'react'
import { observer } from 'mobx-react'

import {
  useGetCharactersNameQuery,
  useGetCharactersSpeciesQuery,
} from 'src/apollo/generated/types-and-hooks'
import { FilterTitles } from 'src/enums'
import { reloader } from 'src/modules/utils'
import { useRootStore } from 'src/store'
import { ModalMenuProps, SearchState } from 'src/types'
import {
  FilterCheckboxField,
  FilterTouchableField,
  HeaderFilter,
  ModalMenu,
} from 'src/ui'
import { getFlatValues, SearchContex } from 'src/ui/utils'

import { CheckboxTitles } from './types'

export const CharacterFilters: FC<ModalMenuProps> = observer((props) => {
  const {
    characterStore: { initialState, params, isFiltered, setParams },
  } = useRootStore()

  const [localParams, setLocaleParams] = useState(params)
  const [localIsFiltered, setLocaleIsFiltered] = useState(isFiltered)

  const onClean = () => {
    setLocaleIsFiltered(false)
    setLocaleParams(initialState)
  }

  const onApply = () => {
    props.setShowModal(false)
    setParams(localParams, localIsFiltered)
  }

  const setStatus = (value: string) => {
    setLocaleIsFiltered(true)
    setLocaleParams({ ...localParams, status: value })
  }

  const setGender = (value: string) => {
    setLocaleIsFiltered(true)
    setLocaleParams({ ...localParams, gender: value })
  }

  const names = useGetCharactersNameQuery({
    variables: { page: 1, name: localParams.name },
  })

  const namesReloader = () =>
    reloader(names.data?.characters.info.next, names.fetchMore)

  const species = useGetCharactersSpeciesQuery({
    variables: { page: 1, species: localParams.species },
  })

  const speciesReloader = () =>
    reloader(species.data?.characters.info.next, species.fetchMore)

  const nameContext: SearchState = {
    results: getFlatValues(names.data?.characters.results),
    value: localParams.name,
    reloader: namesReloader,
    setValue: (value: string) => {
      setLocaleIsFiltered(true)
      setLocaleParams({ ...localParams, name: value })
    },
  }

  const speciesContext: SearchState = {
    results: getFlatValues(species.data?.characters.results),
    value: localParams.species,
    reloader: speciesReloader,
    setValue: (value: string) => {
      setLocaleIsFiltered(true)
      setLocaleParams({ ...localParams, species: value })
    },
  }

  return (
    <ModalMenu {...props}>
      <HeaderFilter
        title={FilterTitles.Filter}
        isFiltered={isFiltered}
        onClean={onClean}
        onApply={onApply}
      />

      <SearchContex.Provider value={nameContext}>
        <FilterTouchableField title={FilterTitles.Name} />
      </SearchContex.Provider>

      <SearchContex.Provider value={speciesContext}>
        <FilterTouchableField title={FilterTitles.Species} />
      </SearchContex.Provider>

      <FilterCheckboxField
        title={CheckboxTitles.Status}
        value={localParams.status}
        setValue={setStatus}
      />

      <FilterCheckboxField
        title={CheckboxTitles.Gender}
        value={localParams.gender}
        setValue={setGender}
      />
    </ModalMenu>
  )
})
