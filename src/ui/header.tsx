import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

const Container = styled.View`
  padding: 20px 16px 10px 16px;
  background: ${colors.headerBackground};
`
const FilterContainer = styled.View`
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`
const FilterButton = styled.TouchableOpacity``

const ButtonTitle = styled.Text`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.purple};
`
const FilterIndicator = styled.View`
  width: 12px;
  height: 12px;
  margin-right: 6px;
  background: ${colors.purple};
  border-radius: 6px;
`
const HeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: ${colors.black};
`

interface Props {
  title: string
}

export const Header = ({ title }: Props) => {
  return (
    <Container>
      <FilterContainer>
        <FilterIndicator />
        <FilterButton>
          <ButtonTitle>Filter</ButtonTitle>
        </FilterButton>
      </FilterContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  )
}
