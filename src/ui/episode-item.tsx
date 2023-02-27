import React from 'react'
import { ArrowIcon } from 'assets/images/icons'
import styled from 'styled-components/native'

import type { CoreEpisodeFields } from 'src/apollo/fragments.generated'
import { colors } from 'src/theme/colors'

import { TextSubtitle } from './text-subtitle'
import { TextTitle } from './text-title'

const ItemContainer = styled.TouchableOpacity<{ index: number }>`
  flex-direction: row;
  align-items: center;
  padding: 7px 16px 12px 0;
  border-color: ${colors.black};
  border-top-width: ${({ index }) => (index === 0 ? 0 : 0.5)}px;
`
const InfoBox = styled.View`
  flex: 1;
`
const EpisodeDate = styled.Text`
  margin-top: 5px;
  font-weight: 900;
  font-size: 11px;
  line-height: 13px;
  color: ${colors.gray[0]};
`

type Props = {
  index: number
  episode: CoreEpisodeFields
}

export const EpisodeItem = ({ index, episode }: Props) => (
  <ItemContainer index={index}>
    <InfoBox>
      <TextTitle>{episode.episode}</TextTitle>
      <TextSubtitle>{episode.name}</TextSubtitle>
      <EpisodeDate>{episode.air_date.toUpperCase()}</EpisodeDate>
    </InfoBox>
    <ArrowIcon />
  </ItemContainer>
)
