import { ApolloClient, InMemoryCache } from '@apollo/client'

import { Characters } from './types'

export const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: ['filter', ['name', 'species', 'status', 'gender']],
            merge(existing: Characters, incoming: Characters) {
              if (existing) {
                return {
                  ...incoming,
                  results: [...existing.results, ...incoming.results],
                }
              } else {
                return incoming
              }
            },
          },
        },
      },
    },
  }),
})
