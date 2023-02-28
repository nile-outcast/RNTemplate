import { makeVar, useReactiveVar } from '@apollo/client'

import type { GetEpisodesVariables } from './/episode-queries.generated'

const episodeInitVar: GetEpisodesVariables = {
  name: '',
  episode: '',
}

export const setEpisodeVar = makeVar({
  initialState: episodeInitVar,
  params: episodeInitVar,
  isFiltered: false,
})

export const useEpisodeVar = () => useReactiveVar(setEpisodeVar)
