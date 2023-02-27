import React, { useCallback, useLayoutEffect, useState } from 'react'

import { ScreenTitles } from 'src/enums'
import { useNavigation } from 'src/navigation'
import { HeaderList, ScreenList } from 'src/ui'

import { CharacterFilters } from './character-filters'
import { useGetCharacters } from './character-queries.generated'
import { useCharacterVar } from './character-state'

export const CharacterScreen = () => {
  const { params, isFiltered } = useCharacterVar()

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

  const data = useGetCharacters({ variables: params })

  const closeModal = useCallback(() => setVisible(false), [])

  return (
    <ScreenList data={data} dataKey="characters">
      <CharacterFilters showModal={visible} closeModal={closeModal} />
    </ScreenList>
  )
}
