module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      classes: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-var': 'warn',
    'no-duplicate-imports': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx', '.jsx'] }],
    // 'sort-imports': [
    //   'error',
    //   {
    //     ignoreCase: false,
    //     ignoreDeclarationSort: false,
    //     memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    //     allowSeparatedGroups: false,
    //   },
    // ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.ts', 'tsx', '.js', '.jsx'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': ['error'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-duplicate-imports': 'error',
    // '@typescript-eslint/explicit-function-return-type': [
    //   'error',
    //   {
    //     allowExpressions: true,
    //   },
    // ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'no-else-return': 'error',
    'no-implicit-coercion': 'error',
    'import/no-named-as-default': 0,
  },
  settings: {
    react: {
      version: '17.0',
    },
  },
};
