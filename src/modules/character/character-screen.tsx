import React, { useCallback, useLayoutEffect, useState } from 'react'
import { observer } from 'mobx-react'

import { useGetCharacters } from 'src/apollo/character-queries'
import { ScreenTitles } from 'src/enums'
import { useNavigation } from 'src/navigation'
import { useRootStore } from 'src/store'
import { HeaderList, ScreenList } from 'src/ui'

import { CharacterFilters } from './character-filters'

export const CharacterScreen = observer(() => {
  const {
    characterStore: { params, isFiltered },
  } = useRootStore()

  const { setOptions } = useNavigation()

  const [visible, setVisible] = useState(false)

  useLayoutEffect(() => {
    setOptions({
      header: () => (
        <HeaderList
          title={ScreenTitles.Character}
          openFilters={() => setVisible(true)}
          isFiltered={isFiltered}
        />
      ),
    })
  }, [isFiltered, setOptions])

  const data = useGetCharacters(params)

  const closeModal = useCallback(() => setVisible(false), [])

  return (
    <ScreenList data={data} dataKey="characters">
      <CharacterFilters showModal={visible} closeModal={closeModal} />
    </ScreenList>
  )
})
