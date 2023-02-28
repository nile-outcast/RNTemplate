import { useMemo } from 'react'

import type { CoreEpisodeFields } from 'src/apollo/fragments.generated'

export const useGetEpisodeSections = (results: CoreEpisodeFields[]) =>
  useMemo(
    () =>
      Object.entries(
        results.reduce<Record<string, CoreEpisodeFields[]>>((prev, episode) => {
          const season = Number(episode.episode.match(/^S(\d\d)E/)?.[1])
          prev[`Season ${season}`]
            ? prev[`Season ${season}`].push(episode)
            : (prev[`Season ${season}`] = [episode])

          return prev
        }, {}),
      ).reduce<{ title: string; data: CoreEpisodeFields[] }[]>(
        (prev, [title, data]) => {
          prev.push({ title, data })

          return prev
        },
        [],
      ),
    [results],
  )
