var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var webpack = require("webpack");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extract0 = new ExtractTextPlugin("s.css");
const extract1 = new ExtractTextPlugin('[name]-two.css');

var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SimpleProgressWebpackPlugin = require( 'customized-progress-webpack-plugin' );

module.exports = {
  entry:  {
    // vendors: ["jquery"],
    main: __dirname + "/app/main.js"
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  externals: "vue", // string（精确匹配）
  module: {
     rules: [
      //  {
      //    test: /\.js$/,
      //    use: "babel-loader",
      //    exclude: /node_modules/
      //   },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: { loader: 'style-loader' },
            use: "css-loader"
          })
         },
      // {
      //   test: /\.vue$/,
      //   loader: 'vue-loader',
      //   options: {
      //     // extractCSS: true
      //     loaders: {
      //       css:extract0.extract({
      //         use: 'css-loader',
      //         fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
      //       })
      //     }
      //   }
      // },
      // {
      //   test: /\.css$/,
      //   use: [
      //     { loader: "style-loader" },
      //     { loader: "file-loader" }
      //   ]
      // },
         // {
         //   test: /\.(png|jpg|gif)$/,
         //   use: ['file-loader']
         // },
        //  {
        //   test: /\.svg$/,
        //   use: [
        //     {loader: 'svg-sprite-loader', options: {
        //       // symbolId: '[name]'
        //       // extract: true,
        //       // spriteFilename: 'flags-sprite.svg'
        //     }}
        //   ]
        // },
      //   {
      //   test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      //   loader: 'file-loader'        
      // }
     ]
   },
  devServer: {
    hot: true,
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HTMLWebpackPlugin({
      title: "yangjian",
      inject:false,
      template: path.join(__dirname, 'index.html')
    }),
    new ExtractTextPlugin("ssss.css"),
    // new ProgressBarPlugin(),
    new SimpleProgressWebpackPlugin()
    // extract1
    //这个使用uglifyJs压缩你的js代码
    // new webpack.optimize.UglifyJsPlugin({minimize: true}),
    //把入口文件里面的数组打包成verdors.js
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}