'use strict';

var webpack = require('webpack');
var path = require('path');

var postcssTools = require('webpack-postcss-tools');
var varMap = postcssTools.makeVarMap('src/app/App.css');

module.exports = {
  target: 'web',
  entry: './src/entry.jsx',
  output: {
    path: './dist/js',
    pathInfo: true,
    publicPath: '/js/',
    filename: 'main.js',
    css: 'App.css'
  },
  module: {
    preLoaders: [
      {test: /\.jsx?$/, loader: 'eslint-loader', exclude: /node_modules/}
    ],
    loaders: [
      {test: /\.png$/, loader: 'url?mimetype=image/png'},
      {test: /\.gif$/, loader: 'url?mimetype=image/gif'},
      {test: /\.jpe?g$/, loader: 'url?mimetype=image/jpeg'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&minetype=application/font-woff'},
      {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file'},
      {test: /\.json$/, loader: 'json'},
      {test: /\.js$/,loader: "transform/cacheable?brfs"}

    ],
    noParse: /\.min\.js/
  },
  postcss: [
    
    // Plugins seem to be first in last out
    // https://github.com/postcss/postcss#plugins
    postcssTools.prependTildesToImports,

    // Fallbacks
    require('autoprefixer-core')({browsers: ['last 2 version']}),

    // Future CSS Syntax
    require('postcss-custom-properties')({variables: varMap.vars}),
    require('postcss-custom-media')({extensions: varMap.media}),
    require('postcss-custom-selectors')({extensions: varMap.selector}),
    require('postcss-media-minmax')(),
    require('postcss-color-function')(),
    require('postcss-nested')()
  ],
  resolve: { 
    root: path.resolve(path.resolve(__dirname), './src/app'),
    extentions: ['', 'js', 'jsx', 'css']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
    }),
    new webpack.DefinePlugin({ 'ENV.webpack': true })
  ]
};
