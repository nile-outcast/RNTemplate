import type { FC } from 'react'
import React from 'react'
import type { TouchableOpacityProps } from 'react-native'
import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { colors } from 'src/theme/colors'

import { TextTitle } from './text-title'

type Props = {
  name: string
  subtext: string
} & TouchableOpacityProps

export const CellItemTemplate: FC<Props> = ({
  name,
  subtext,
  children,
  ...props
}) => (
  <Container {...props} height={children ? 220 : 80}>
    {children}
    <InfoBox>
      <SubText numberOfLines={1}>{subtext}</SubText>
      <TextTitle numberOfLines={2}>{name}</TextTitle>
    </InfoBox>
  </Container>
)

const Container = styled.TouchableOpacity<{ height: number }>`
  width: ${(Dimensions.get('window').width - 48) / 2}px;
  height: ${({ height }) => height}px;
  border: 1px solid ${colors.gray[4]};
  border-radius: 8px;
`
const InfoBox = styled.View`
  padding: 12px;
`
const SubText = styled.Text`
  font-size: 11px;
  line-height: 13px;
  color: ${colors.gray[6]};
`
