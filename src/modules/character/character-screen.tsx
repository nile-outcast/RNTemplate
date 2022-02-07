import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { ParamListBase } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { observer } from 'mobx-react'
import styled from 'styled-components/native'

import { useGetCharactersQuery } from 'src/apollo/generated/types-and-hooks'
import { useRootStore } from 'src/store'
import { colors } from 'src/theme/colors'
import { ScreenTitles } from 'src/types'
import { CharacterItem, HeaderList, Loader } from 'src/ui'

import { CharacterFilters } from './character-filters'

const Container = styled.SafeAreaView`
  padding: 10px 8px;
  background-color: ${colors.white};
`
type Props = {
  navigation: NativeStackNavigationProp<ParamListBase>
}

export const CharacterScreen = observer(({ navigation }: Props) => {
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

  const reLoad = async () => {
    await fetchMore({
      variables: {
        page: data?.characters.info.next,
      },
    })
  }

  if (loading) return <Loader />

  if (!data) return null

  return (
    <Container>
      <FlatList
        data={data?.characters.results}
        renderItem={({ item }) => <CharacterItem character={item} />}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onEndReached={reLoad}
        onEndReachedThreshold={1}
      />
      <CharacterFilters showModal={visible} setShowModal={setVisible} />
    </Container>
  )
})
