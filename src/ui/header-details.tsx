import React from 'react'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation/routes'
import { colors } from 'src/theme/colors'
import { TitleProps } from 'src/types'
import { BackButton } from 'src/ui'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  background: ${colors.gray[5]};
`
const HeaderTitle = styled.Text`
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: ${colors.black};
`

export const HeaderDetails = ({ title }: TitleProps) => {
  const { goBack } = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => goBack()} />
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  )
}
