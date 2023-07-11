module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
    'prettier/prettier': 0,
    'react-native/no-inline-styles': 0,
    semi: 0,
    'no-console': 2,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'after-used',
      },
    ],
    eqeqeq: 2,
    'no-extra-boolean-cast': 0,
    'react/no-did-mount-set-state': 0,
    quotes: 0,
  },
};
