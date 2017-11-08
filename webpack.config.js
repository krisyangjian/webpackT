var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:  {
    // vendors: ["jquery"],
    main: __dirname + "/app/main.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[chunkhash].js",
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    // loaders: [{
    //   test: /\.js$/,
    //   exclude: /node_modules/,
    //   loader: 'babel-loader'
    // }]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({title: 'Code Splitting'})
    //这个使用uglifyJs压缩你的js代码
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //把入口文件里面的数组打包成verdors.js
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
}