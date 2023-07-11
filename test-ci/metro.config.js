const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const conf = require('@uimjs/metro-config');
module.exports = mergeConfig(getDefaultConfig(__dirname), conf.default());
