import React from 'react'
import styled from 'styled-components/native'

import type { CoreCharacterFields } from 'src/apollo/fragments.generated'
import { Routes, useNavigation } from 'src/navigation'

import { CellItemTemplate } from './cell-item-template'

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
    <CellItemTemplate
      name={character.name}
      subtext={character.status}
      onPress={onPress}
    >
      <Image source={{ uri: character.image }} />
    </CellItemTemplate>
  )
})

const Image = styled.Image`
  width: auto;
  height: 140px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`
