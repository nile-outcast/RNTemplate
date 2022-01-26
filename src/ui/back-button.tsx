import React from 'react'
import { BackArrowIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { HeaderTitles } from 'src/types'

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  left: 9px;
  flex-direction: row;
`
const Text = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  margin-left: 5px;
  color: ${colors.purple};
`
type Props = {
  onPress: () => void
}

export const BackButton = ({ onPress }: Props) => (
  <ButtonContainer onPress={onPress}>
    <BackArrowIcon />
    <Text>{HeaderTitles.Back}</Text>
  </ButtonContainer>
)
