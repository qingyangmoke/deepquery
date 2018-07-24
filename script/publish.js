/* eslint-disable */
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const rm = require('rimraf');
const copy = require('copy');
const chalk = require('chalk');
const webpack = require('webpack');

const configDev = require('../config/webpack.dev.config');
const config = require('../config/webpack.config');
const pkg = require('../package.json');
const rootPath = path.resolve(__dirname, '../');
const buildPath = path.resolve(rootPath, 'publish');
const distPath = path.resolve(rootPath, 'publish');
const srcPath = path.resolve(rootPath, 'src');
const typesPath = path.resolve(rootPath, 'types');


const newPackage = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  description: pkg.description,
  keywords: pkg.keywords,
  repository: pkg.repository,
  main: `index.js`,
  scripts: {},
  types: 'types/tween.d.ts',
  license: pkg.license,
  bugs: pkg.bugs,
  homepage: pkg.homepage,
};

// 构建全量压缩包
const building = ora('building...\n\n');
building.start();

new Promise((resolve, reject) => {
  console.log(chalk.cyan(`## clear dist directory ...\n\n`));
  rm(path.resolve(buildPath, `*`), err => {
    if (err) {
      reject(err);
      return;
    };
    resolve();
  });
  console.log(chalk.green(`  clear complete\n\n`));
})
  .then(() => {
    return new Promise((resolve, reject) => {
      console.log(chalk.cyan('## copy LICENSE\n'));
      copy(`${rootPath}/LICENSE`, distPath, function (err, files) {
        if (err) {
          reject(err);
          return;
        };
        resolve();
        console.log(chalk.green('  copying LICENSE complete.\n'));
      });
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      console.log(chalk.cyan('## copy README.md\n'));
      copy(`${rootPath}/README.md`, distPath, function (err, files) {
        if (err) {
          reject(err);
          return;
        };
        resolve();
        console.log(chalk.green('  copying README.md complete.\n'));
      });
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      copy(path.resolve(srcPath, `*.js`), distPath, function (err, files) {
        if (err) {
          reject(err);
          return;
        };
        console.log(chalk.green('  Copy complete.\n'));
        resolve();
      });
    });
  })
  .then(() => {
    console.log(chalk.cyan('## write package.json\n'));
    fs.writeFileSync(path.resolve(distPath, 'package.json'), JSON.stringify(newPackage), {
      flag: 'w',
      encoding: 'utf8',
    });
    console.log(chalk.green('   write package.json complete.\n'));
    return Promise.resolve();
  })
  .then(() => {
    console.log(chalk.green('Build finish.\n'));
    building.stop();
  })
  .catch((err) => {
    building.stop();
    throw err;
  });
