module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'error',
    'sort-keys': [
      'warn',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
