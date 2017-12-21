const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src_dir = path.resolve(__dirname, 'src');
const public_dir = path.resolve(__dirname, 'public');
const vendor_libs = [
  'prop-types',
  'react',
  'react-dom',
  'react-redux',
  'react-router',
  'jquery',
  'bootstrap',
  'recompose',
  'redux',
];

module.exports = {
  entry: {
    bundle: src_dir + '/index.js',
    vendor: vendor_libs
  },
  output: {
    path: public_dir + '/build',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
        use: 'babel-loader',
        test: /\.js?$/,
        exclude: '/node_modules/'
      },
      {
        use: [
          'style-loader',
          'css-loader'
        ],
        test: /\.css?$/
      },
      {
        loader: 'file-loader',
        test: /\.(png|jpg|gif|svg|woff|woff2|eot|ttf|mp3|mp4|ico)$/
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      Components: src_dir + '/components',
      Pages: src_dir + '/pages',
      Actions: src_dir + '/actions',
      Constants: src_dir + '/constants',
      Reducers: src_dir + '/reducers'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    }),    
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      title: 'React router advanced',
      filename: 'index.html',
      template: public_dir + '/template.html'
    })
  ],
  devServer: {
    port: 9999,
    open: true,
    // historyApiFallback: true
  }
};