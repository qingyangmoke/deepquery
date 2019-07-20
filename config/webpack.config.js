const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const pkg = require('../package.json');

const config = require('./webpack.dev.config');

// 压缩版
const minConfig = merge(config, {
  output: {
    filename: `index.js`,
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
});

minConfig.module.loaders.forEach(function (e) {
  if (e.loader === 'babel-loader') {
    e.query.plugins.push("transform-remove-console");
  }
});

module.exports = minConfig;
