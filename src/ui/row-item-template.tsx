import type { FC } from 'react'
import React from 'react'
import { ArrowIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import { TextSubtitle } from './text-subtitle'
import { TextTitle } from './text-title'

type Props = {
  title: string
  subTitle: string
  onPress?: () => void
}

export const RowItemTemplate: FC<Props> = ({
  children,
  title,
  subTitle,
  onPress,
}) => {
  const info = (
    <InfoBox>
      <TextTitle>{title}</TextTitle>
      <TextSubtitle>{subTitle}</TextSubtitle>
      {children}
    </InfoBox>
  )

  return onPress ? (
    <TouchableBox onPress={onPress}>
      {info}
      <ArrowIcon />
    </TouchableBox>
  ) : (
    info
  )
}
const TouchableBox = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-right: 16px;
`
const InfoBox = styled.View`
  flex: 1;
  padding: 8px 0 12px 0;
`
