var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var directories = {
  app: path.resolve(__dirname, 'app'),
  dist: path.resolve(__dirname, 'dist')
};

module.exports = {
  directories: directories,
  devtool: 'sourcemap',
  context: directories.app,
  entry: './index.js',
  module: {
    loaders: [
      { test: /.js$/,
	exclude: /node_modules/,
	loader: 'ng-loader!babel',
	query: {
	  presets: ['es2015']
	}
      }
    ]
  },
  devServer: {
    contentBase: directories.app,
    stats: {
      colors: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fun Retrospectives',
      template: 'underscore-template!' + directories.app + '/index.html',
      appMountId: 'fireideaz',
      googleAnalytics: {
        trackingId: 'UA-66141519-1',
        pageViewOnLoad: true
      },
      inject: 'body',
      hash: true
    })
  ]
};

