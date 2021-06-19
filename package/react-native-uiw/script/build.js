const babel = require('@babel/core');
const {spawn} = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const pkg = require('../package.json');

function transform(filePath) {
  const {code} = babel.transformFileSync(filePath, {
    presets: [require.resolve('@babel/preset-typescript')],
    // presets: ['module:metro-react-native-babel-preset'],
  });
  return code;
}

function getPath(rootPath, result = []) {
  const dirs = fs.readdirSync(rootPath);
  dirs.forEach((item) => {
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

const tsc = {
  compilerOptions: {
    // allowJs: true,
    esModuleInterop: true,
    outDir: 'lib',
    // isolatedModules: true,
    declaration: true,
    jsx: 'react-native',
    lib: ['es6'],
    resolveJsonModule: true,
    moduleResolution: 'node',
    strict: true,
    target: 'esnext',
    typeRoots: ['node_modules/@types/'],
    baseUrl: '.',
  },
  exclude: ['node_modules'],
  include: ['src/**/*'],
};

(async () => {
  const projectPath = path.join(process.cwd(), '..', '..');
  const root = path.join(process.cwd(), 'src');
  const output = path.join(process.cwd(), 'lib');
  const tscPath = path.join(process.cwd(), 'tsconfig.json');
  try {
    await fs.remove(output);
    await fs.writeJSON(tscPath, tsc);
    await fs.remove(root);
    await fs.copy(path.join(process.cwd(), '../../components'), root);
    await fs.remove(path.join(process.cwd(), 'README.md'));
    await fs.copyFile(
      path.join(process.cwd(), '../../README.md'),
      path.join(process.cwd(), 'README.md'),
    );
    const files = await getPath(root);
    files.forEach((itemPath) => {
      if (/.(tsx|ts)$/.test(itemPath)) {
        const code = transform(itemPath);
        const outputFile = itemPath.replace(root, output);
        fs.outputFileSync(outputFile.replace(/.(tsx|ts)$/, '.js'), code);
        // eslint-disable-next-line prettier/prettier
        console.log(`♻️: ${itemPath.replace(process.cwd(), '').replace(/^\//, '')} -> ${outputFile.replace(process.cwd(), '').replace(/^\//, '').replace(/\.tsx$/, '.js')}`);
      }
      if (/.(md|png)$/.test(itemPath)) {
        const outputMd = itemPath.replace(root, output);
        fs.ensureFileSync(outputMd);
        fs.copyFileSync(itemPath, outputMd);
        // eslint-disable-next-line prettier/prettier
        console.log(`📋: ${itemPath.replace(process.cwd(), '').replace(/^\//, '')} -> ${outputMd.replace(process.cwd(), '').replace(/^\//, '')}`);
      }
    });
    await execute('npm run type');
    // use workflows
    // -------------
    // await execute('npm publish');
    // await fs.remove(root);
    // await fs.remove(output);
    // await fs.remove(tscPath);
    // await fs.remove(path.join(process.cwd(), 'package-lock.json'));
    // await fs.remove(path.join(process.cwd(), 'yarn.lock'));
    // // await fs.remove(path.join(process.cwd(), 'node_modules'));
    // await execute(`cd ${projectPath} && git add .`);
    // await execute(
    //   `cd ${projectPath} && git commit -m "released v${pkg.version}"`,
    // );
    // await execute(`cd ${projectPath} && git push`);
    // await execute(`git tag -a v${pkg.version} -m "released v${pkg.version}"`);
    // await execute('git push --tags');
  } catch (err) {
    console.log(err);
  }
})();

function execute(command) {
  return new Promise((resolve, reject) => {
    const subProcess = spawn('bash');
    function onData(data) {
      process.stdout.write(data);
    }
    subProcess.on('error', (error) => {
      reject(
        new Error(
          `command failed: ${command}; ${error.message ? error.message : ''}`,
        ),
      );
    });
    subProcess.stdout.on('data', onData);
    subProcess.stderr.on('data', onData);
    subProcess.on('close', (code) => {
      resolve(code);
    });
    subProcess.stdin.write(`${command} \n`);
    subProcess.stdin.end();
  });
}
