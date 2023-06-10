import path from 'path';
import webpack, { Configuration } from 'webpack';
import { LoaderConfOptions } from 'kkt';
import lessModules from '@kkt/less-modules';
// import rawModules from '@kkt/raw-modules';
import scopePluginOptions from '@kkt/scope-plugin-options';
import pkg from './package.json';
import { mdCodeModulesLoader } from 'markdown-react-code-preview-loader';
// @ts-ignore
import MDS from 'babel-transform-import-plugin';

export default (conf: Configuration, env: 'development' | 'production', options: LoaderConfOptions) => {
  conf = lessModules(conf, env, options);
  // conf = rawModules(conf, env, { ...options });
  conf = scopePluginOptions(conf, env, {
    ...options,
    allowedFiles: [path.resolve(process.cwd(), 'README.md')],
    allowedPaths: [path.resolve(process.cwd(), '../packages/core')],
  });

  conf.module!.exprContextCritical = false;
  // Get the project version.
  conf.plugins!.push(
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(pkg.version),
    }),
  );
  // conf = mdCodeModulesLoader(conf);
  conf = mdCodeModulesLoader(conf, undefined, {
    babelPlugins: [
      [
        MDS,
        {
          libraryName: '@uiw/react-native',
          alias: '@uiw/react-native/lib',
        },
      ],
    ],
  });
  conf.resolve = {
    ...(conf.resolve || {}),
    alias: {
      ...((conf.resolve || {}).alias || {}),
      'react-native$': 'react-native-web',
      '@uiw/react-native': path.join(process.cwd(), './src/react-native'),
    },
  };

  // conf.module!.rules = conf.module?.rules?.map((rules) => {
  //   if (typeof rules === 'object' && 'oneOf' in rules && rules.oneOf) {
  //     rules.oneOf = rules.oneOf.map((rule) => {
  //       if (rule.loader?.includes('babel-loader') && rule.test && rule.test.toString() === /\.(js|mjs|jsx|ts|tsx)$/.toString()) {
  //         // @ts-ignore
  //         console.log('rule:', rule);
  //         rule.include = [
  //           // path.resolve(process.cwd(), '../packages/core/lib'),
  //           // path.resolve(process.cwd(), 'node_modules'),
  //           path.resolve(process.cwd(), 'src')
  //         ]
  //       }
  //       return rule;
  //     })
  //   }
  //   return rules;
  // });

  if (env === 'production') {
    conf.output = { ...conf.output, publicPath: './' };
  }
  return conf;
};
