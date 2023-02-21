import React, { FC } from 'react'
import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from '@apollo/client'

import { ClientMergeArgs } from './types'

const merge = (
  existing: ClientMergeArgs | undefined,
  incoming: ClientMergeArgs,
) => {
  if (existing) {
    return {
      ...incoming,
      results: [...existing.results, ...incoming.results],
    }
  } else {
    return incoming
  }
}

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter', ['name', 'species', 'status', 'gender']],
            merge,
          },
          locations: {
            keyArgs: ['filter', ['name', 'type', 'dimension']],
            merge,
          },
        },
      },
    },
  }),
})

export const ApolloProvider: FC = ({ children }) => (
  <Provider client={client}>{children}</Provider>
)
