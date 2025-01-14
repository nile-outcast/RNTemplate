import React from 'react'
import styled from 'styled-components/native'

import type { CoreEpisodeFields } from 'src/apollo/fragments.generated'
import { colors } from 'src/theme/colors'

import { RowItemTemplate } from './row-item-template'

type Props = {
  episode: CoreEpisodeFields
  index: number
}

export const EpisodeItem = React.memo(({ index, episode }: Props) => (
  <>
    {!!index && <Divider />}

    <RowItemTemplate
      title={episode.episode}
      subTitle={episode.name}
      onPress={() => undefined}
    >
      <EpisodeDate>{episode.air_date}</EpisodeDate>
    </RowItemTemplate>
  </>
))

const EpisodeDate = styled.Text`
  margin-top: 5px;
  font-weight: 900;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: ${colors.gray[0]};
`
const Divider = styled.View`
  padding-left: 16px;
  border-color: ${colors.black};
  border-top-width: 0.5px;
`
