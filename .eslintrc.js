module.exports = {
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    es6: true,
    'react-native/react-native': true,
  },

  plugins: ['@typescript-eslint', 'import', 'prettier', 'simple-import-sort'],

  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],

  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'case',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'default',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
    ],
    'prefer-const': ['error'],
    'max-lines': ['error', 500],
    'no-console': 'error',
    'object-shorthand': 'error',
    'no-unneeded-ternary': 'error',
    'no-nested-ternary': 'error',
    'newline-before-return': 'warn',
    semi: ['error', 'never'],
    'no-shadow': 'off',

    // prettier
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        bracketSpacing: true,
        printWidth: 80,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    'simple-import-sort/imports': [
      'warn',
      {
        groups: [['^\\u0000'], ['^react', '^[^.]'], ['^src/'], ['^\\.']],
      },
    ],

    // imports
    'import/newline-after-import': 'error',
    'import/no-cycle': 'error',
    'import/no-unused-modules': 'error',
    'import/no-default-export': 'error',

    // react
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.tsx'] }],
    'react/jsx-no-literals': 'off',
    'react/sort-comp': 'warn',

    // react-native
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'warn',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',
    'react-native/no-raw-text': 'off',

    // promise
    // 'promise/prefer-await-to-then': 'warn',
    // 'promise/prefer-await-to-callbacks': 'warn',

    // ts
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-shadow': ['error'],
  },
}
