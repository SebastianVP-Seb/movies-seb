const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader'
    }
  },
  {
    test: /\.html$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'html-loader',
      }
    ]
  },
  {
    test: /\.(s*)css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
      'sass-loader'
    ]
  },
  {
    test: /\.(png|jpe?g|gif|svg)/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'assets/image/[contenthash].[ext]'
        }
      }
    ]
  },
]

const common = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname,  '../dist'),
    filename: '[name].[contenthash].js',
    clean: true,
    publicPath: '/'
  },
  resolve: {
    extensions: [ '.js', '.jsx'],
    alias: {
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@iamges': path.resolve(__dirname, '../src/iamges'),
      '@services': path.resolve(__dirname, '../src/services'),
      '@reducers': path.resolve(__dirname, '../src/reducers'),
      '@types': path.resolve(__dirname, '../src/types'),
      '@actions': path.resolve(__dirname, '../src/actions'),
    }
  },
  module: {
    rules: loaders
  },
};

module.exports = { common }
