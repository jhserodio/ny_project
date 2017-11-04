var path = require("path");
var src  = "./resources/assets/js";
var babel = require('babel-loader');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

// entry points
  entry: {
    main      : src + "/main.js",
    product   : src + "/product.js",
    info      : src + "/main-info.js"
  },

// output scripts
  output : {
    path     : "public/js/",
    filename : "[name].js"
  },

// loaders
  module: {

    loaders: [
      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: "json"
      }
    ]
  },

// extension files used
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

// Dev server settings
  devServer: {
    contentBase: "./info.html",
    colors: true,
    historyApiFallback: true,
    inline: true,
    hot: true,
    port: 8080
  },

// Webpack Plugins settings
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],


// resolve extensions and directories
  resolve: {
    extensions: ['', '.css', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules']
  }


}
