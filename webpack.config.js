const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.html$/,
  //       use: ['html-loader']
  //     }
  //   ]
  // },
  mode:'production', 
  entry: '/src/index.html',
  output: {
    path: path.resolve(__dirname, 'dist'), // 상대경로를 절대경로로 변환
    filename: './index.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename:"test.html"
    }),
    new CopyWebpackPlugin({
      patterns: [
        { 
          from: './src/assets',
          to: './assets'
        }
      ]
    })
  ],
}