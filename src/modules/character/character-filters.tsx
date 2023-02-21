import React, { FC, useCallback, useState } from 'react'

import {
  useGetCharactersNames,
  useGetCharactersSpecies,
} from 'src/apollo/character-queries'
import { FilterTitles } from 'src/enums'
import { ModalMenuProps } from 'src/types'
import { FilterCheckboxField, FiltersModal, FilterTouchableField } from 'src/ui'
import { useGetSearchContext } from 'src/ui/hooks'

import { SearchProvider } from '../search-context'
import { setCharacterVar, useCharacterVar } from './character-state'
import { CheckboxTitles } from './enums'

export const CharacterFilters: FC<ModalMenuProps> = (props) => {
  const { closeModal } = props
  const { initialState, params, isFiltered } = useCharacterVar()

  const [localParams, setLocaleParams] = useState(params)
  const [localIsFiltered, setLocaleIsFiltered] = useState(isFiltered)

  const names = useGetCharactersNames({ name: localParams.name })
  const species = useGetCharactersSpecies({ species: localParams.species })

  const onClean = useCallback(() => {
    setLocaleIsFiltered(false)
    setLocaleParams(initialState)
  }, [initialState])

  const onApply = useCallback(() => {
    closeModal()
    setCharacterVar({
      initialState,
      params: localParams,
      isFiltered: localIsFiltered,
    })
  }, [closeModal, initialState, localIsFiltered, localParams])

  const useSetValue = (key: keyof typeof localParams) => {
    return useCallback(
      (value: string) => {
        setLocaleIsFiltered(true)
        setLocaleParams((prev) => ({ ...prev, [key]: value }))
      },
      [key],
    )
  }

  const nameContext = useGetSearchContext(
    names,
    'characters',
    localParams.name,
    useSetValue('name'),
  )

  const speciesContext = useGetSearchContext(
    species,
    'characters',
    localParams.species,
    useSetValue('species'),
  )

  return (
    <FiltersModal
      {...props}
      isFiltered={isFiltered}
      onApply={onApply}
      onClean={onClean}>
      <SearchProvider value={nameContext}>
        <FilterTouchableField title={FilterTitles.Name} />
      </SearchProvider>

      <SearchProvider value={speciesContext}>
        <FilterTouchableField title={FilterTitles.Species} />
      </SearchProvider>

      <FilterCheckboxField
        title={CheckboxTitles.Status}
        value={localParams.status}
        setValue={useSetValue('status')}
      />

      <FilterCheckboxField
        title={CheckboxTitles.Gender}
        value={localParams.gender}
        setValue={useSetValue('gender')}
      />
    </FiltersModal>
  )
}
