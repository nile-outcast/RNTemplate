import React, { useState } from 'react'
import { ArrowIcon, CheckboxIcons } from 'assets/images/icons'
import styled from 'styled-components/native'

import { FilterSubtitles, FilterTitles } from 'src/enums'
import { colors } from 'src/theme/colors'
import { FilterTitleProps } from 'src/types'
import { TextSubtitle, TextTitle } from 'src/ui'

import { SearchModal } from './search-modal'
import { useSearchContex } from './utils'

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
  margin-left: 16px;
`

export const FilterTouchableField = ({ title }: FilterTitleProps) => {
  const [visible, setVisible] = useState(false)
  const { value } = useSearchContex()

  return (
    <>
      <Container onPress={() => setVisible(true)}>
        <CheckboxIcons isChecked={!!value} />
        <InfoBox>
          <TextTitle>{FilterTitles[title]}</TextTitle>
          <TextSubtitle>{FilterSubtitles[title]}</TextSubtitle>
        </InfoBox>
        <ArrowIcon />
      </Container>
      <SearchModal
        title={title}
        showModal={visible}
        setShowModal={setVisible}
      />
    </>
  )
}
