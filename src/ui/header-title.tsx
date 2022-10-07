import React, { FC } from 'react'
import styled from 'styled-components/native'

const HeaderText = styled.Text`
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
`

export const HeaderTitle: FC = ({ children }) => (
  <HeaderText>{children}</HeaderText>
)
