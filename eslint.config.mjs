import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      curly: 'error',
      'no-const-assign': 'error',
    },
  },
  {
    ignores: [
      'build/**',
      'dist/**',
      'tools/**',
      '**/*.cjs',
      'package-lock.json',
      '.prettierrc.cjs',
    ],
  },
];
