import React from 'react'
import { Text, View } from 'react-native'

import { useGetFullCharacterQuery } from 'src/apollo/generated/types-and-hooks'

export const CharacterDetails = () => {
  const { data } = useGetFullCharacterQuery({
    variables: { id: '' },
  })

  return (
    <View>
      <Text>{data?.character.name}</Text>
    </View>
  )
}
