/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 */

const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      '@uiw/react-native': path.resolve(`${__dirname}/lib/`),
      // '@uiw/react-native': path.resolve(`${__dirname}/../../packages/core/`),
      // 'react-native-svg': path.resolve(
      //   `${__dirname}/../../node_modules/react-native-svg/`,
      // ),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
