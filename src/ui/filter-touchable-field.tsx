import React from 'react'
import { CheckboxIcons } from 'assets/images/icons'
import styled from 'styled-components/native'

import { TitleProps } from 'src/types'

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
`

export const FilterTouchebleField = ({ title }: TitleProps) => {
  return (
    <Container>
      <CheckboxIcons isChecked={true} />
    </Container>
  )
}
