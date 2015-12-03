var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

var config = {
  devtool: 'source-map',
  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: '[name]-[hash].bundle.js',
    path: path.join(__dirname, './public/assets/'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new AssetsPlugin({
      filename: 'webpack-assets.json',
      path: path.join(__dirname, 'public', 'assets')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'client') }
    ]
  }
};

module.exports = config;
