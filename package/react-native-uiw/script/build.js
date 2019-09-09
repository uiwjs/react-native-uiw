const babel = require('@babel/core');
const path = require('path');
const fs = require('fs-extra');

function transform(filePath) {
  const {code} = babel.transformFileSync(filePath, {
    presets: ['module:metro-react-native-babel-preset'],
  });
  return code;
}

function getPath(rootPath, result = []) {
  const dirs = fs.readdirSync(rootPath);
  dirs.forEach(item => {
    const itemPath = path.join(rootPath, item);
    const stat = fs.statSync(itemPath);
    if (stat.isFile()) {
      result.push(itemPath);
    } else if (stat.isDirectory()) {
      result = result.concat(getPath(itemPath));
    }
  });
  return result;
}

(async () => {
  const root = path.join(process.cwd(), 'src');
  const output = path.join(process.cwd(), 'lib');
  await fs.emptyDir(root);
  await fs.copy(path.join(process.cwd(), '../../components'), root);
  const files = await getPath(root);
  files.forEach(itemPath => {
    if (/.(tsx|ts)$/.test(itemPath)) {
      const code = transform(itemPath);
      const outputFile = itemPath.replace(root, output);
      fs.outputFileSync(outputFile.replace(/.(tsx|ts)$/, '.js'), code);
      // eslint-disable-next-line prettier/prettier
      console.log(`♻️: ${itemPath.replace(process.cwd(), '').replace(/^\//, '')} -> ${outputFile.replace(process.cwd(), '').replace(/^\//, '')}`);
    }
  });
})();
