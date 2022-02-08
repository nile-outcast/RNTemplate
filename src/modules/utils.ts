import {
  ApolloQueryResult,
  FetchMoreQueryOptions,
  OperationVariables,
} from '@apollo/client'

type FetchMore = (
  fetchMoreOptions: FetchMoreQueryOptions<OperationVariables>,
) => Promise<ApolloQueryResult<OperationVariables>>

export const reloader = (next: number | undefined, fetchMore: FetchMore) => {
  if (next) {
    fetchMore({
      variables: {
        page: next,
      },
    })
  }
}
