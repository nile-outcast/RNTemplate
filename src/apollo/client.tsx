import React, { FC } from 'react'
import {
  ApolloClient,
  ApolloProvider as Provider,
  InMemoryCache,
} from '@apollo/client'

import { Characters, Locations } from './types'

const merge = <T extends Characters | Locations>(existing: T, incoming: T) => {
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
