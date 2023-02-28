import React from 'react'
import { CheckboxIcons } from 'assets/images/icons'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'
import { TextSubtitle } from 'src/ui'

import { filterFields } from './utils'

const Container = styled.View`
  width: 100%;
  padding-top: 19.5px;
`
const FieldsContainer = styled.View`
  padding-left: 19px;
  margin-top: 8.5px;
  border-color: ${colors.black};
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
`
const FieldContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`
const InfoBox = styled.View<{ index: number }>`
  flex: 1;
  padding: 10.5px 0;
  margin-left: 15px;
  border-color: ${colors.black};
  border-top-width: ${({ index }) => (index === 0 ? 0 : 0.5)}px;
`
const FiledlText = styled.Text`
  font-weight: 400;
  font-size: 17px;
  line-height: 22px;
  color: ${colors.black};
`
const TitleBox = styled.View`
  padding-left: 16px;
`

type Props = {
  title: keyof typeof filterFields
  value: string
  setValue: (value: string) => void
}

export const FilterCheckboxField = ({ title, value, setValue }: Props) => (
  <Container>
    <TitleBox>
      <TextSubtitle>{title}</TextSubtitle>
    </TitleBox>
    <FieldsContainer>
      {filterFields[title].map((field, index) => (
        <FieldContainer
          key={index}
          onPress={() => setValue(field.toLowerCase())}
        >
          <CheckboxIcons isChecked={value === field.toLowerCase()} />
          <InfoBox index={index}>
            <FiledlText>{field}</FiledlText>
          </InfoBox>
        </FieldContainer>
      ))}
    </FieldsContainer>
  </Container>
)
