import { useCallback } from 'react'
import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
  QueryResult,
} from '@apollo/client'

import { Keys } from 'src/types'

type FetchMore = (
  fetchMoreOptions: FetchMoreQueryOptions<OperationVariables>,
) => Promise<ApolloQueryResult<OperationVariables>>

const reloader = (next: number | undefined, fetchMore: FetchMore) => {
  if (next) {
    fetchMore({
      variables: {
        page: next,
      },
    })
  }
}

export const useReloader = (data: QueryResult, key: Keys) => {
  return useCallback(
    () => reloader(data.data?.[key].info.next, data.fetchMore),
    [data.data, data.fetchMore, key],
  )
}
