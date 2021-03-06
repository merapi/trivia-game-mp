module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  env: {
    'cypress/globals': true,
  },
  plugins: ['eslint-plugin-cypress'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': 'off',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
}
