import React, { useCallback, useLayoutEffect, useState } from 'react'

import { useGetLocations } from 'src/apollo/location-queries'
import { ScreenTitles } from 'src/enums'
import { useNavigation } from 'src/navigation/types'
import { Keys } from 'src/types'
import { HeaderList, ScreenList } from 'src/ui'

import { LocationFilters } from './location-filters'
import { useLocationVar } from './location-state'

export const LocationScreen = () => {
  const { params, isFiltered } = useLocationVar()

  const data = useGetLocations(params)

  const { setOptions } = useNavigation()

  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderList
          title={ScreenTitles.Location}
          openFilters={() => setVisible(true)}
          isFiltered={isFiltered}
        />
      ),
    })
  }, [isFiltered, setOptions])

  const closeModal = useCallback(() => setVisible(false), [])

  return (
    <ScreenList data={data} dataKey={Keys.Locations}>
      <LocationFilters showModal={visible} closeModal={closeModal} />
    </ScreenList>
  )
}
