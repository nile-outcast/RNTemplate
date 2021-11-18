import React from 'react'
import { Text, View } from 'react-native'

import { useGetCharactersQuery } from 'src/apollo/graphql'

export const CharacterScreen = () => {
  const { data, loading } = useGetCharactersQuery({
    variables: { page: 2, name: '', species: '', status: '', gender: '' },
  })

  //console.log(data)
  //console.log(error)

  return (
    <View>
      <Text>{data?.characters?.results[1]?.name}</Text>
    </View>
  )
}
