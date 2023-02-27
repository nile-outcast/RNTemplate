import { useCallback } from 'react'
import type { QueryResult } from '@apollo/client'

import type { DataKeys } from 'src/types'

const reloader = (
  next: number | undefined,
  fetchMore: QueryResult['fetchMore'],
) => {
  if (next) {
    fetchMore({
      variables: {
        page: next,
      },
    })
  }
}

export const useReloader = (data: QueryResult, key: DataKeys) =>
  useCallback(
    () => reloader(data.data?.[key].info.next, data.fetchMore),
    [data.data, data.fetchMore, key],
  )
