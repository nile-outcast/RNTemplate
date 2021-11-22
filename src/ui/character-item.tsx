import React from 'react'
import styled from 'styled-components/native'

import { CoreCharacterFieldsFragment } from 'src/apollo/generated/types-and-hooks'
import { Routes, useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

const ItemContainer = styled.TouchableOpacity`
  flex: 1;
  border-radius: 8px;
  margin: 10px 8px;
  border: 1px solid ${colors.gray[4]};
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
const NameText = styled.Text`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  margin-bottom: 20px;
`

type Props = {
  character: CoreCharacterFieldsFragment
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
        <NameText>{character.name}</NameText>
      </InfoBox>
    </ItemContainer>
  )
}
