import React from 'react'
import styled from 'styled-components/native'

import { CoreCharacterFields } from 'src/apollo/fragments.generated'
import { Routes, useNavigation } from 'src/navigation'

import { ItemContainer } from './item-container'

type Props = {
  character: CoreCharacterFields
}

export const CharacterItem = React.memo(({ character }: Props) => {
  const { navigate } = useNavigation()

  const onPress = () =>
    navigate(Routes.CharacterDetailsScreen, {
      id: character.id,
      title: character.name,
    })

  return (
    <ItemContainer
      name={character.name}
      subtext={character.status}
      onPress={onPress}>
      <Image source={{ uri: character.image }} />
    </ItemContainer>
  )
})

const Image = styled.Image`
  width: auto;
  height: 140px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`
