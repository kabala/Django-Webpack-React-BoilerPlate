var path = require('path');
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');


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