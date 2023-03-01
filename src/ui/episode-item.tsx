import React from 'react'
import styled from 'styled-components/native'

import type { CoreEpisodeFields } from 'src/apollo/fragments.generated'
import { Routes, useNavigation } from 'src/navigation'
import { colors } from 'src/theme'

import { Divider } from './divider'
import { RowItemTemplate } from './row-item-template'

type Props = {
  episode: CoreEpisodeFields
  index: number
}

export const EpisodeItem = React.memo(({ index, episode }: Props) => {
  const { navigate } = useNavigation()

  const onPress = () =>
    navigate(Routes.EpisodeDetailsScreen, {
      id: episode.id,
      title: episode.name,
    })

  return (
    <>
      {!!index && <Divider />}

      <RowItemTemplate
        title={episode.episode}
        subTitle={episode.name}
        onPress={onPress}
      >
        <EpisodeDate>{episode.air_date}</EpisodeDate>
      </RowItemTemplate>
    </>
  )
})

const EpisodeDate = styled.Text`
  margin-top: 5px;
  font-weight: 900;
  font-size: 11px;
  line-height: 13px;
  text-transform: uppercase;
  color: ${colors.gray[0]};
`
