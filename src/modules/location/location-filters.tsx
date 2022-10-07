import React, { FC, useCallback, useState } from 'react'

import {
  useGetLocationsDimensions,
  useGetLocationsNames,
  useGetLocationsTypes,
} from 'src/apollo/location-queries'
import { FilterTitles } from 'src/enums'
import { Keys, ModalMenuProps } from 'src/types'
import { FilterTouchableField, HeaderFilter, ModalMenu } from 'src/ui'
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
  }, [initialState, localIsFiltered, localParams, closeModal])

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
    Keys.Locations,
    localParams.name,
    useSetValue('name'),
  )

  const typeContext = useGetSearchContext(
    types,
    Keys.Locations,
    localParams.type,
    useSetValue('type'),
  )

  const dimensionContext = useGetSearchContext(
    dimensions,
    Keys.Locations,
    localParams.dimension,
    useSetValue('dimension'),
  )

  return (
    <ModalMenu {...props}>
      <HeaderFilter
        title={FilterTitles.Filter}
        isFiltered={isFiltered}
        onClean={onClean}
        onApply={onApply}
      />

      <SearchProvider value={nameContext}>
        <FilterTouchableField title={FilterTitles.Name} />
      </SearchProvider>

      <SearchProvider value={typeContext}>
        <FilterTouchableField title={FilterTitles.Type} />
      </SearchProvider>

      <SearchProvider value={dimensionContext}>
        <FilterTouchableField title={FilterTitles.Dimension} />
      </SearchProvider>
    </ModalMenu>
  )
}