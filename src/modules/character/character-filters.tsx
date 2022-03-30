import React, { FC, useCallback, useState } from 'react'
import { observer } from 'mobx-react'

import {
  useGetCharactersNames,
  useGetCharactersSpecies,
} from 'src/apollo/character-queries'
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
import { useGetFlatValues } from 'src/ui/hooks'
import { SearchContex } from 'src/ui/utils'

import { CheckboxTitles } from './enums'

export const CharacterFilters: FC<ModalMenuProps> = observer((props) => {
  const {
    characterStore: { initialState, params, isFiltered, setParams },
  } = useRootStore()

  const [localParams, setLocaleParams] = useState(params)
  const [localIsFiltered, setLocaleIsFiltered] = useState(isFiltered)

  const onClean = useCallback(() => {
    setLocaleIsFiltered(false)
    setLocaleParams(initialState)
  }, [initialState])

  const onApply = useCallback(() => {
    props.setShowModal(false)
    setParams(localParams, localIsFiltered)
  }, [localIsFiltered, localParams, props, setParams])

  const setStatus = useCallback(
    (value: string) => {
      setLocaleIsFiltered(true)
      setLocaleParams({ ...localParams, status: value })
    },
    [localParams],
  )

  const setGender = useCallback(
    (value: string) => {
      setLocaleIsFiltered(true)
      setLocaleParams({ ...localParams, gender: value })
    },
    [localParams],
  )

  const names = useGetCharactersNames({ page: 1, name: localParams.name })

  const namesReloader = useCallback(
    () => reloader(names.data?.characters.info.next, names.fetchMore),
    [names.data?.characters.info.next, names.fetchMore],
  )

  const species = useGetCharactersSpecies({
    page: 1,
    species: localParams.species,
  })

  const speciesReloader = useCallback(
    () => reloader(species.data?.characters.info.next, species.fetchMore),
    [species.data?.characters.info.next, species.fetchMore],
  )

  const nameContext: SearchState = {
    results: useGetFlatValues(names.data?.characters.results ?? []),
    value: localParams.name,
    reloader: namesReloader,
    setValue: (value: string) => {
      setLocaleIsFiltered(true)
      setLocaleParams({ ...localParams, name: value })
    },
  }

  const speciesContext: SearchState = {
    results: useGetFlatValues(species.data?.characters.results ?? []),
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
