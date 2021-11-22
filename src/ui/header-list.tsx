import React from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { FilterIndicatorIcon } from './icons/filter-indicator-icon'

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
const FilterButton = styled.TouchableOpacity`
  margin-left: 6px;
`
const ButtonTitle = styled.Text`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.purple};
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

export const HeaderList = ({ title }: Props) => {
  return (
    <Container>
      <FilterContainer>
        <FilterIndicatorIcon />
        <FilterButton>
          <ButtonTitle>Filter</ButtonTitle>
        </FilterButton>
      </FilterContainer>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  )
}
