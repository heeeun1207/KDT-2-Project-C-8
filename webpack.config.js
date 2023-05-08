const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/assets/index.html',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'test.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/assets',
          to: './assets'
        }
      ]
    })
  ]
};
