module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:import/errors', 'plugin:import/warnings'],
  globals: {},
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'class-methods-use-this': 0,
    'no-param-reassign': 0,
    'function-paren-newline': 0,
    'no-underscore-dangle': 0,
    'linebreak-style': 0,
    'max-len': 0,
    'no-alert': 0,
    'no-plusplus': 0,
    'func-names': 0,
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'no-unused-vars': 0,
    'no-restricted-syntax': 0,
    'no-await-in-loop': 0,
    'prefer-destructuring': 0,
    'arrow-parens': ['error', 'as-needed'],
    'max-classes-per-file': 0,
  },
};
