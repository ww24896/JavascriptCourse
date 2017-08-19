const path = require('path');

module.exports = {
  entry: ['./app/index.js'],
  output: {
    // path: 'build',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
// Adding babel to Webpack
  module: {
    loaders: [
      {
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, 'build'),
    inline: true
  }
}
