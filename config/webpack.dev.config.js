const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.common.config.js');

process.env.NODE_ENV = 'development';

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
      contentBase: path.join(__dirname, '../dist'),
      port: 3000,
      clientLogLevel: 'error'
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/index.html'
    }),
  ],
});