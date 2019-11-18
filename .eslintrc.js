module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
  },
}
