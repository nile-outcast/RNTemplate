import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { observer } from 'mobx-react'
import styled from 'styled-components/native'

import { useGetCharactersQuery } from 'src/apollo/generated/types-and-hooks'
import { ScreenTitles } from 'src/enums'
import { reloader } from 'src/modules/utils'
import { useRootStore } from 'src/store'
import { colors } from 'src/theme/colors'
import { CharacterItem, HeaderList, Loader } from 'src/ui'

import { CharacterFilters } from './character-filters'
import { NavigatorProps } from './types'

const Container = styled.SafeAreaView`
  padding: 10px 8px;
  background-color: ${colors.white};
`

export const CharacterScreen = observer(({ navigation }: NavigatorProps) => {
  const {
    characterStore: { params, isFiltered },
  } = useRootStore()

  const { data, loading, fetchMore } = useGetCharactersQuery({
    variables: params,
  })

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <HeaderList
          title={ScreenTitles.Character}
          openFilters={() => setVisible(true)}
          isFiltered={isFiltered}
        />
      ),
    })
  }, [isFiltered, navigation])

  const reload = () => reloader(data?.characters.info.next, fetchMore)

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
