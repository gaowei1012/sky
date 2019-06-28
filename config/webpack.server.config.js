/**
 * react ssr webpack server
 */

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config')

const resolve = dir => path.resolve(__dirname, dir)
const isDev = process.env.NODE_ENV === 'devlement'
const isProd = process.env.NODE_ENV === 'production'


const serverConfig = {
  entry: resolve('../app/server/index.js'),
  output: {
    filename: 'file-[hash].js',
    path: resolve('../public/js')
  }
}

if (isDev) {
  // TODO
}

if (isProd) {
  // TODO
}

module.exports = merge(baseConfig, serverConfig)
