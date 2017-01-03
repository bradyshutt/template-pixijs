'use strict';

let path = require('path');

module.exports = {
  entry: './src/main.ts',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' },
    ]
  },
  externals: [
    {"pixi.js": "PIXI"}
  ]
};

