import React from 'react'
import styled from 'styled-components/native'

import { useNavigation } from 'src/navigation/types'
import { colors } from 'src/theme/colors'
import { TitleProps } from 'src/types'
import { BackButton, HeaderTitle } from 'src/ui'

import { getTitleFormat } from './utils'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  background: ${colors.barsLightGray};
`

export const HeaderDetails = ({ title }: TitleProps) => {
  const { goBack } = useNavigation()

  return (
    <Container>
      <BackButton onPress={() => goBack()} />
      <HeaderTitle>{getTitleFormat(title)}</HeaderTitle>
    </Container>
  )
}
