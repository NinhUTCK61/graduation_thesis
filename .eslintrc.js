module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react/react-in-jsx-scope': 'off',
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        semi: 0,
      },
    },
  ],
  ignorePatterns: ['prisma/generated/zod/index.ts'],
}
