import React, { useCallback, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { observer } from 'mobx-react'
import styled from 'styled-components/native'

import { useGetCharacters } from 'src/apollo/character-queries'
import { ScreenTitles } from 'src/enums'
import { reloader } from 'src/modules/utils'
import { useNavigation } from 'src/navigation/types'
import { useRootStore } from 'src/store'
import { colors } from 'src/theme/colors'
import { CharacterItem, HeaderList, Loader } from 'src/ui'

import { CharacterFilters } from './character-filters'

const Container = styled.SafeAreaView`
  height: 100%;
  padding: 10px 8px;
  background-color: ${colors.white};
`

export const CharacterScreen = observer(() => {
  const {
    characterStore: { params, isFiltered },
  } = useRootStore()

  const { data, loading, fetchMore } = useGetCharacters(params)

  const { setOptions } = useNavigation()

  const [visible, setVisible] = useState(false)

  useEffect(() => {
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

  const reload = useCallback(
    () => reloader(data?.characters.info.next, fetchMore),
    [data?.characters.info.next, fetchMore],
  )

  if (loading) return <Loader />

  return (
    <Container>
      {data && (
        <FlatList
          data={data?.characters.results}
          renderItem={({ item }) => <CharacterItem character={item} />}
          horizontal={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          onEndReached={reload}
          onEndReachedThreshold={1}
        />
      )}
      <CharacterFilters showModal={visible} setShowModal={setVisible} />
    </Container>
  )
})
