/* eslint-disable */
const path = require('path');
const fs = require('fs');
const ora = require('ora');
const rm = require('rimraf');
const copy = require('copy');
const chalk = require('chalk');
const webpack = require('webpack');

const configProd = require('../config/webpack.config');
const pkg = require('../package.json');
const rootPath = path.resolve(__dirname, '../');
const publishPath = path.resolve(rootPath, 'publish');
const distPath = path.resolve(rootPath, 'dist');
const srcPath = path.resolve(rootPath, 'src');


const newPackage = {
  name: pkg.name,
  version: pkg.version,
  author: pkg.author,
  description: pkg.description,
  keywords: pkg.keywords,
  repository: pkg.repository,
  main: `index.js`,
  scripts: {},
  license: pkg.license,
  "typings": "index.d.ts",
  bugs: pkg.bugs,
  homepage: pkg.homepage,
};

// 构建全量压缩包
const building = ora('building...\n\n');
building.start();

new Promise((resolve, reject) => {
    console.log(chalk.cyan(`## clear dist directory ...\n\n`));
    rm(path.resolve(distPath, `*`), err => {
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
      console.log(chalk.cyan(`## clear publish directory ...\n\n`));
      rm(path.resolve(publishPath, `*`), err => {
        if (err) {
          reject(err);
          return;
        };
        resolve();
      });
      console.log(chalk.green(`  clear complete\n\n`));
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      console.log(chalk.cyan('## webpack building... \n'));
      webpack(configProd, function (err, stats) {
        if (err) {
          reject(err);
          return;
        };
        building.stop();
        process.stdout.write(stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false,
        }) + '\n\n');
        console.log(chalk.green('  webpack Build complete.\n'));
        resolve();
      });
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      console.log(chalk.cyan('## copy LICENSE\n'));
      copy(`${rootPath}/LICENSE`, publishPath, function (err, files) {
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
      copy(`${rootPath}/README.md`, publishPath, function (err, files) {
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
      console.log(chalk.cyan('## copy index.d.ts\n'));
      copy(`${rootPath}/index.d.ts`, publishPath, function (err, files) {
        if (err) {
          reject(err);
          return;
        };
        resolve();
        console.log(chalk.green('  copying index.d.ts complete.\n'));
      });
    });
  })
  .then(() => {
    return new Promise((resolve, reject) => {
      copy(path.resolve(distPath, `*.js`), publishPath, function (err, files) {
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
    fs.writeFileSync(path.resolve(publishPath, 'package.json'), JSON.stringify(newPackage), {
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
