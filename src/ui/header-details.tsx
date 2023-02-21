import React from 'react'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation'
import { colors } from 'src/theme/colors'
import { TitleProps } from 'src/types'
import { BackButton, HeaderTitle } from 'src/ui'

export const HeaderDetails = ({ title }: TitleProps) => {
  const { goBack } = useNavigation()

  return (
    <Container>
      <BackButton onPress={goBack} />
      <Title numberOfLines={1}>{title}</Title>
    </Container>
  )
}

const Title = styled(HeaderTitle)`
  width: 40%;
`
const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  background: ${colors.barsLightGray};
`
