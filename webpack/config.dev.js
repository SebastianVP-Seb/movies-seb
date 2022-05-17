const { common } = require('./config.common');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 8070,
    open: true,
},
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: './index.html',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].css',
    }),
    new Dotenv()
  ],
}
