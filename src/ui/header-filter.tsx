import React, { useState } from 'react'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { FilterTitles, HeaderTitles, TitleProps } from 'src/types'
import { BackButton } from 'src/ui'

import { FilterTitle } from './filter-title'

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
`
const TextBox = styled.View`
  flex: 1;
  height: 28px;
  justify-content: center;
`
const ClearText = styled.Text`
  font-size: 17px;
  line-height: 22px;
  color: ${colors.purple};
  margin-left: 15px;
`
const FilterTextBox = styled(TextBox)`
  align-items: center;
`
const ApplyTextBox = styled(TextBox)`
  align-items: flex-end;
`
const ApplyTextBG = styled.View`
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 12px;
  margin-right: 15px;
  border-radius: 14px;
  background-color: ${colors.purple};
`
const ApplyText = styled.Text`
  color: ${colors.white};
  font-weight: 900;
  font-size: 13px;
  line-height: 18px;
`
type Props = TitleProps & {
  closeModal?: () => void
}

export const HeaderFilter = ({ title, closeModal }: Props) => {
  const [isFilter] = useState(true)

  return (
    <Container>
      <TextBox>
        {title === FilterTitles.Filter ? (
          isFilter && <ClearText>{HeaderTitles.Clear}</ClearText>
        ) : (
          <BackButton onPress={() => closeModal && closeModal()} />
        )}
      </TextBox>

      <FilterTextBox>
        <FilterTitle>{title}</FilterTitle>
      </FilterTextBox>

      <ApplyTextBox>
        {title === FilterTitles.Filter && (
          <ApplyTextBG>
            <ApplyText>{HeaderTitles.Apply}</ApplyText>
          </ApplyTextBG>
        )}
      </ApplyTextBox>
    </Container>
  )
}
