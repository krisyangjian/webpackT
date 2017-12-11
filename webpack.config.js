var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry:  {
    // vendors: ["jquery"],
    main: __dirname + "/app/main.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    chunkFilename: '[name].undle.js'
  },
  module: {
     rules: [
      //  {
      //    test: /\.js$/,
      //    use: "babel-loader",
      //    exclude: /node_modules/
      //   },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract('css-loader')
          // use: ["style-loader", "css-loader"]
         },
        //  {
        //    test: /\.(png|jpg|gif)$/,
        //    use: ['file-loader']
        //  },
         {
          test: /\.svg$/,
          use: [
            {loader: 'svg-sprite-loader', options: {
              // symbolId: '[name]'
              // extract: true,
              // spriteFilename: 'flags-sprite.svg'
            }}
          ]
        }
     ]
   },
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new ExtractTextPlugin({
      filename: "[name].[contenthash].css"
    })
    //这个使用uglifyJs压缩你的js代码
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //把入口文件里面的数组打包成verdors.js
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ]
}