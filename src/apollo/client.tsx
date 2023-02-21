import React, { FC } from 'react'
import {
  ApolloClient,
  ApolloProvider as Provider,
  FieldFunctionOptions,
  InMemoryCache,
} from '@apollo/client'

type Result = Record<string, string>

const merge = (
  existing: { results: Result[] } | undefined,
  incoming: { results: Result[] },
  { readField }: FieldFunctionOptions,
) => {
  const results: Record<string, Result> = {}

  existing?.results.forEach(
    (result) => (results[`${readField('id', result)}`] = result),
  )
  incoming.results.forEach(
    (result) => (results[`${readField('id', result)}`] = result),
  )

  return {
    ...incoming,
    results: Object.values(results),
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
