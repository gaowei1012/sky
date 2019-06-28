/**
 * webpack client config
 *
 */

const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const megre = require('webpack-merge')
const baseConfig = require('./webpack.config')

const resolve = dir => path.resolve(__dirname, dir)

const isDev = process.env.NODE_ENV === 'devlement'
const isProd = process.env.NODE_ENV === 'production'

const clientConfig = {
  entry: resolve('../app/client/app.js'),
  output: {
    path: resolve('../public'),
    filename: 'file-[hash].js',
    pulicpatch: resolve('../public/client')
  }
}

if (isDev) {
  // TODO
}

if (isProd) {
  // TODO
}

module.exports = megre(baseConfig, clientConfig)