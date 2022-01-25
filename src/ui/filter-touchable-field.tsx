import React from 'react'
import { ArrowIcon, CheckboxIcons } from 'assets/images/icons'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { FilterSubtitles, FilterTitles } from 'src/types'

import { TextSubtitle } from './text-subtitle'
import { TextTitle } from './text-title'

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 8.5px 16px 10.5px 19px;
  margin-top: 19px;
  border-color: ${colors.black};
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
`
const InfoBox = styled.View`
  flex: 1;
`
type Props = {
  title: keyof typeof FilterTitles & keyof typeof FilterSubtitles
}

export const FilterTouchebleField = ({ title }: Props) => {
  return (
    <Container>
      <CheckboxIcons isChecked={true} />
      <InfoBox>
        <TextTitle>{FilterTitles[title]}</TextTitle>
        <TextSubtitle>{FilterSubtitles[title]}</TextSubtitle>
      </InfoBox>
      <ArrowIcon />
    </Container>
  )
}
