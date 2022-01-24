import React, { FC } from 'react'
import styled from 'styled-components/native'

const FilterText = styled.Text`
  font-weight: 900;
  font-size: 15px;
  line-height: 20px;
`

export const FilterTitle: FC = ({ children }) => (
  <FilterText>{children}</FilterText>
)
