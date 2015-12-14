var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var BowerWebpackPlugin = require("bower-webpack-plugin");

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  context: __dirname,
  entry: ['./assets/js/index'],
  output: {
      path: path.resolve('./assets/build/'),
      //publicPath: '/',
      filename: '[name]-[hash].js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.DefinePlugin({
      'process.env': {
        // This has effect on the react lib size
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new BowerWebpackPlugin(),
    new webpack.ProvidePlugin({
        'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
  ],
  module: {
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
              cacheDirectory: true,
              presets: ['es2015', 'react']
          }
        }
      ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules', 'bower_components']
  },
};