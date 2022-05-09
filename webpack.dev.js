const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',

  devtool: 'eval-cheap-module-source-map',
  
  devServer: {
    static: '.build',
    historyApiFallback: true
  }
})