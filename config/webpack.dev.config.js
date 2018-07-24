const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const banner = `${pkg.name}
Description: ${pkg.description}
Author: ${pkg.author}
Version: v${pkg.version}
Github: ${pkg.repository.url}`
  ;

const DEV = process.env.NODE_ENV === 'development'

const config = {
  entry: {
    'DeepQuery': [path.resolve(__dirname, '../src/index.js')]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: path.resolve(__dirname, '../dist'),
    filename: `${pkg.name}.debug.js`,
    libraryTarget: 'umd',
    library: ['[name]'],
  },
  plugins: [
    new webpack.BannerPlugin(banner),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          "plugins": []
        }
      },
      {
        test: /\.js$/,
        loader: 'string-replace',
        query: {
          multiple: [
            {
              search: '__VERSION__', // 版本号
              replace: `${pkg.version}`
            }
          ]
        }
      }
    ],
  },
};

module.exports = config;
