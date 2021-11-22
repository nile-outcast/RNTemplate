import React from 'react'
import styled from 'styled-components/native'

import { CoreEpisodeFieldsFragment } from 'src/apollo/generated/types-and-hooks'
import { colors } from 'src/theme/colors'

const Episode = styled.Text`
  font-weight: 900;
  font-size: 17px;
  line-height: 22px;
`
const EpisodeName = styled.Text`
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: ${colors.gray[6]};
`
const EpisodeDate = styled.Text`
  font-weight: 900;
  font-size: 11px;
  line-height: 13px;
  color: ${colors.gray[0]};
`

type Props = {
  episode: CoreEpisodeFieldsFragment
}

export const EpisodeItem = ({ episode }: Props) => (
  <>
    <Episode>{episode.name}</Episode>
    <EpisodeName>{episode.name}</EpisodeName>
    <EpisodeDate>{episode.air_date}</EpisodeDate>
  </>
)
