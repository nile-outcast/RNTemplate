import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  config: {
    addDocBlocks: false,
    avoidOptionals: {
      field: true,
    },
    dedupeFragments: true,
    defaultScalarType: 'unknown',
    disableDescriptions: true,
    maybeValue: 'T',
    omitOperationSuffix: true,
    preResolveTypes: false,
    skipTypename: true,
  },
  documents: ['src/modules/**/*-queries.ts', 'src/apollo/fragments.ts'],
  generates: {
    'src/apollo/types.ts': {
      plugins: ['typescript'],
    },
    'src/modules': {
      plugins: ['typescript-operations', 'typescript-react-apollo'],
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: '../apollo/types.ts',
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['eslint --fix -c .eslintrc.js'],
  },
  schema: 'https://rickandmortyapi.com/graphql',
}

// eslint-disable-next-line import/no-default-export
export default config
