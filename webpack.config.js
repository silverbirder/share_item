var webpack = require('webpack')
module.exports = {
  entry: [
    './src/web/app.js',
  ],
  output: {
    filename: 'app.js',
    path: __dirname + '/public'
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
    contentBase: __dirname + '/public/',
    port: 8080,
    inline: true,
  }
}
