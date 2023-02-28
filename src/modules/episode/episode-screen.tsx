import React, { useCallback, useLayoutEffect, useState } from 'react'

import { ScreenTitles } from 'src/enums'
import { useNavigation } from 'src/navigation'
import { HeaderList, ScreenList } from 'src/ui'

import { useGetEpisodes } from './episode-queries.generated'
import { useEpisodeVar } from './episode-state'

export const EpisodeScreen = () => {
  const { params, isFiltered } = useEpisodeVar()

  const { setOptions } = useNavigation()

  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderList
          title={ScreenTitles.Episode}
          openFilters={() => setVisible(true)}
          isFiltered={isFiltered}
        />
      ),
    })
  }, [isFiltered, setOptions])

  const data = useGetEpisodes({ variables: params })

  const closeModal = useCallback(() => setVisible(false), [])

  return (
    <ScreenList data={data} dataKey="episodes">
      {/* <LocationFilters showModal={visible} closeModal={closeModal} /> */}
    </ScreenList>
  )
}
