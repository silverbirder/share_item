var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry: [
    '../src/web/app.js',
  ],
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../public')
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    port: 8080,
    inline: true,
  }
}
