import React from 'react'
import { BackArrowIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'

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

export const BackButton = () => {
  const { goBack } = useNavigation()

  return (
    <ButtonContainer onPress={() => goBack()}>
      <BackArrowIcon />
      <Text>Back</Text>
    </ButtonContainer>
  )
}
