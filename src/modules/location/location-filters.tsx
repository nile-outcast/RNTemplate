import React, { FC, useCallback, useState } from 'react'

import {
  useGetLocationsDimensions,
  useGetLocationsNames,
  useGetLocationsTypes,
} from 'src/apollo/location'
import { FilterTitles } from 'src/enums'
import { ModalMenuProps } from 'src/types'
import { FiltersModal, FilterTouchableField } from 'src/ui'
import { useGetSearchContext } from 'src/ui/hooks'

import { SearchProvider } from '../search-context'
import { setLocationVar, useLocationVar } from './location-state'

export const LocationFilters: FC<ModalMenuProps> = (props) => {
  const { closeModal } = props
  const { initialState, params, isFiltered } = useLocationVar()

  const [localParams, setLocaleParams] = useState(params)
  const [localIsFiltered, setLocaleIsFiltered] = useState(isFiltered)

  const names = useGetLocationsNames({ name: localParams.name })
  const types = useGetLocationsTypes({ type: localParams.type })
  const dimensions = useGetLocationsDimensions({
    dimension: localParams.dimension,
  })

  const onClean = useCallback(() => {
    setLocaleIsFiltered(false)
    setLocaleParams(initialState)
  }, [initialState])

  const onApply = useCallback(() => {
    closeModal()
    setLocationVar({
      initialState,
      params: localParams,
      isFiltered: localIsFiltered,
    })
  }, [closeModal, initialState, localIsFiltered, localParams])

  const useSetValue = (key: keyof typeof localParams) =>
    useCallback(
      (value: string) => {
        setLocaleIsFiltered(true)
        setLocaleParams((prev) => ({ ...prev, [key]: value }))
      },
      [key],
    )

  const nameContext = useGetSearchContext(
    names,
    'locations',
    localParams.name,
    useSetValue('name'),
  )

  const typeContext = useGetSearchContext(
    types,
    'locations',
    localParams.type,
    useSetValue('type'),
  )

  const dimensionContext = useGetSearchContext(
    dimensions,
    'locations',
    localParams.dimension,
    useSetValue('dimension'),
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

      <SearchProvider value={typeContext}>
        <FilterTouchableField title={FilterTitles.Type} />
      </SearchProvider>

      <SearchProvider value={dimensionContext}>
        <FilterTouchableField title={FilterTitles.Dimension} />
      </SearchProvider>
    </FiltersModal>
  )
}
