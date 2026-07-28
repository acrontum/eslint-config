import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig({
  files: ['**/*.ts'],
  languageOptions: { globals: globals.node, parserOptions: { projectService: true, createDefaultProgram: true } },
  extends: [prettierRecommended, tseslint.configs.strictTypeChecked],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true, allowNullish: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
        destructuredArrayIgnorePattern: '^_',
      },
    ],
    'prettier/prettier': [
      'error',
      { bracketSpacing: true, endOfLine: 'auto', semi: true, printWidth: 130, singleQuote: true, quoteProps: 'consistent' },
    ],
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'trace'] }],
    'require-await': 'error',
  },
});
