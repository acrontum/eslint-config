const { dirname } = require('path');

/*
npx @eslint/migrate-config legacy.js
*/

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: process.env.npm_package_json ? dirname(process.env.npm_package_json) : process.cwd(),
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: ['plugin:prettier/recommended', 'plugin:@typescript-eslint/strict-type-checked'],
  root: true,
  env: {
    node: true,
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'trace'] }],
  },
};
