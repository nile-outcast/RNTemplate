import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

import { useGetCharactersQuery } from 'src/apollo/generated/types-and-hooks'

const Container = styled.SafeAreaView``

export const CharacterList = () => {
  const { data, loading } = useGetCharactersQuery({
    variables: { page: 3, name: '', species: '', status: '', gender: '' },
  })

  return (
    <View>
      <Text>{data?.characters?.results[10]?.id}</Text>
    </View>
  )
}
