/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  extends: [
    // Chúng ta sẽ dùng các rule mặc định từ các plugin mà chúng ta đã cài.
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    // Disable các rule mà eslint xung đột với prettier.
    // Để cái này ở dưới để nó override các rule phía trên!.
    'eslint-config-prettier',
    'prettier',
    'airbnb',
    'airbnb-typescript'
  ],
  plugins: ['prettier'],
  settings: {
    react: {
      // Nói eslint-plugin-react tự động biết version của React.
      version: 'detect'
    },
    // Nói ESLint cách xử lý các import
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json')
      }
    }
  },
  env: {
    node: true
  },
  rules: {
    'no-param-reassign': ['error', { props: false }],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/lines-between-class-members': 'off',
    // Possible errors
    'max-lines-per-function': ['error', { max: 200, skipBlankLines: true, skipComments: true }],
    'max-lines': ['error', { max: 300, skipBlankLines: true, skipComments: true }],
    'no-console': 'error',
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function']
      }
    ],
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    // Best practices
    'dot-notation': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-sequences': 'error',
    // Stylistic
    'array-bracket-spacing': 'error',
    'computed-property-spacing': ['error', 'never'],
    curly: 'error',
    'no-lonely-if': 'error',
    'no-unneeded-ternary': 'error',
    'one-var-declaration-per-line': 'error',
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: false,
        avoidEscape: true
      }
    ],
    // ES6
    'array-callback-return': 'off',
    'prefer-const': 'error',
    // Imports
    'import/prefer-default-export': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true
      }
    ],
    'no-unused-expressions': 'off',
    'no-prototype-builtins': 'off',
    // Tắt rule yêu cầu import React trong file jsx
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'warn',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ]
  }
};
