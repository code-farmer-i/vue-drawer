'use strict'
const path = require('path')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  entry: {
    'index' : path.resolve(__dirname, 'src/drawer.vue')
  },
  output: {
    //根据CommonJs的规范进行打包
    libraryTarget: "commonjs2",
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('package/src')]
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          dead_code: true,
          unused: true
        }
      },
      parallel: true
    })
  ]
}

webpack(webpackConfig, error => {
  if(error) throw error
})