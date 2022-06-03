import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { CoreCharacter } from 'src/apollo/types'
import { Routes, useNavigation } from 'src/navigation/types'
import { colors } from 'src/theme/colors'

import { TextTitle } from './text-title'

const ItemContainer = styled.TouchableOpacity`
  width: ${(Dimensions.get('window').width - 48) / 2};
  padding-bottom: 20px;
  margin: 10px 8px;
  border: 1px solid ${colors.gray[4]};
  border-radius: 8px;
`
const Image = styled.Image`
  width: auto;
  height: 140px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
`
const InfoBox = styled.View`
  padding: 12px;
`
const StatusText = styled.Text`
  font-size: 11px;
  line-height: 13px;
  color: ${colors.gray[6]};
`

type Props = {
  character: CoreCharacter
}

export const CharacterItem = ({ character }: Props) => {
  const { navigate } = useNavigation()

  return (
    <ItemContainer
      onPress={() =>
        navigate(Routes.CharacterDetailsScreen, {
          id: character.id,
          title: character.name,
        })
      }>
      <Image source={{ uri: character.image }} />
      <InfoBox>
        <StatusText>{character.status}</StatusText>
        <TextTitle>{character.name}</TextTitle>
      </InfoBox>
    </ItemContainer>
  )
}
