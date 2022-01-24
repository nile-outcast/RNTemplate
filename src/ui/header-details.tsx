import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { TitleProps } from 'src/types'

import { BackButton } from './back-button'

const Container = styled.View`
  justify-content: center;
  align-items: center;
  padding: 13px 0;
  background: ${colors.headerBackground};
`
const HeaderTitle = styled.Text`
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
  color: ${colors.black};
`

export const HeaderDetails = ({ title }: TitleProps) => (
  <Container>
    <BackButton />
    <HeaderTitle>{title}</HeaderTitle>
  </Container>
)
