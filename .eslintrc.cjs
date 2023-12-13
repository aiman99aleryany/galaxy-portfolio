module.exports = {
  env: {
    browser: true,
    es2015: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-underscore-dangle': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    'no-unneeded-ternary': 0,
  },
};
