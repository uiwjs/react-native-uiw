/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 */

const path = require('path');
// module.exports = watchHoistedModules(__dirname, {
//   // ...
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: true,
//       },
//     }), server: { enableVisualizer: true, } 
//   },
// });

console.log(path.resolve(`${__dirname}/../../packages/core/`))
console.log(path.resolve(`${__dirname}/../../`))

module.exports = {
  resolver: {
    extraNodeModules: {
      '@uiw/react-native': path.resolve(`${__dirname}/lib/`),
      // '@uiw/react-native': path.resolve(`${__dirname}/../../packages/core/`),
      // 'react-native-svg': path.resolve(
      //   `${__dirname}/../../node_modules/react-native-svg/`,
      // ),
    }
  },
  transformer: {
    // babelTransformerPath: require.resolve('react-native-svg-transformer'),
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
