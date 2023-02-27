import React from 'react'
import { FilterIndicatorIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import { HeaderTitles } from 'src/enums'
import { colors } from 'src/theme/colors'
import type { TitleProps } from 'src/types'

import { TextTitle } from '.'

type Props = TitleProps & {
  openFilters: () => void
}

export const HeaderList = ({ isFiltered, openFilters, title }: Props) => (
  <Container>
    <FilterContainer>
      {isFiltered && <FilterIndicatorIcon />}

      <FilterButton onPress={openFilters}>
        <TextTitle style={{ color: colors.purple }}>
          {HeaderTitles.Filter}
        </TextTitle>
      </FilterButton>
    </FilterContainer>

    <HeaderTitle>{title}</HeaderTitle>
  </Container>
)

const Container = styled.View`
  padding: 20px 16px 10px 16px;
  background: ${colors.barsLightGray};
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
const HeaderTitle = styled.Text`
  font-weight: 700;
  font-size: 34px;
  line-height: 41px;
  color: ${colors.black};
`
