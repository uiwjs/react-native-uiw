import path from 'path';
import webpack, { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
// import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  // conf = rawModules(conf, env, { ...options });
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'README.md')],
  });

  conf.module!.exprContextCritical = false;
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  conf = mdCodeModulesLoader(conf);

  conf.resolve = {
    ...(conf.resolve || {}),
    alias: {
      ...((conf.resolve || {}).alias || {}),
      'react-native$': 'react-native-web',
      '@uiw/react-native': path.join(process.cwd(), './src/react-native'),
    },
  };
  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }
  return conf;
};
