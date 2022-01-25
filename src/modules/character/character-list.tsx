import React from 'react'
import { FlatList, Text } from 'react-native'
import styled from 'styled-components/native'

import { useGetCharactersQuery } from 'src/apollo/generated/types-and-hooks'
import { colors } from 'src/theme/colors'
import { CharacterItem } from 'src/ui/character-item'

import { CharacterFilter } from './character-filter'

const Container = styled.SafeAreaView`
  padding: 10px 8px;
  background-color: ${colors.white};
`

export const CharacterListScreen = () => {
  const { data, loading } = useGetCharactersQuery({
    variables: { page: 1, name: '', species: '', status: '', gender: '' },
  })

  if (loading) return <Text>{'Loading'}</Text>
  if (!data) return null

  return (
    <Container>
      <FlatList
        data={data?.characters.results}
        renderItem={({ item }) => <CharacterItem character={item} />}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      <CharacterFilter />
    </Container>
  )
}
