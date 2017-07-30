const path = require('path')
const webpack = require('webpack')
const apiUrl = process.env.API_URL || 'http://localhost:8080'

module.exports = {
  entry: ['babel-polyfill','./src/app.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { use: 'babel-loader', test:/\.js$/ }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'API_URL': JSON.stringify(apiUrl)
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    },
    watchContentBase: true,
    stats: "minimal"
  }
}
