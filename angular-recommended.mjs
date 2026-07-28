import angular from 'angular-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        createDefaultProgram: true,
      },
    },
    extends: [angular.configs.tsRecommended, prettierRecommended, tseslint.configs.strict],
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/explicit-module-boundary-types': 'error',
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
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      // strict overrides
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/restrict-template-expressions': [
        'error',
        { allowNumber: true, allowBoolean: true, allowNullish: true },
      ],
      'prettier/prettier': [
        'error',
        {
          bracketSpacing: true,
          endOfLine: 'auto',
          semi: true,
          printWidth: 130,
          singleQuote: true,
          quoteProps: 'consistent',
        },
      ],
      'require-await': 'error',
      // opinionated
      '@typescript-eslint/no-dynamic-delete': 'off',
      'no-case-declarations': 'off',
      '@angular-eslint/prefer-inject': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [angular.configs.templateRecommended, prettierRecommended],
    rules: {
      'prettier/prettier': ['error', { parser: 'angular' }],
    },
  },
);
