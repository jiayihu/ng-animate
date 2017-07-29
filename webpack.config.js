const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const root = {
  src: path.join(__dirname, 'demo'),
  dest: path.join(__dirname, 'demo-dist'),
};
const IS_DEV = process.env.NODE_ENV !== 'production';

const devPlugins = [
  new CopyWebpackPlugin([
    { from: path.join(root.src, 'assets'), to: 'assets' },
  ]),
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)@angular/,
    root.src
  ),
];
const prodPlugins = [
  new CopyWebpackPlugin([
    { from: path.join(root.src, 'assets'), to: 'assets' },
  ]),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: false,
    output: { comments: false },
    compressor: {
      warnings: false,
    },
  }),
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)@angular/,
    root.src
  ),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  }),
];

module.exports = {
  devServer: IS_DEV
    ? {
        historyApiFallback: true,
        noInfo: false,
        port: 3000,
      }
    : {},
  devtool: 'eval',
  entry: path.join(root.src, 'main.ts'),
  output: {
    path: root.dest,
    filename: 'js/main.js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: IS_DEV ? [/node_modules/] : [],
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        exclude: [/node_modules/],
      },
      {
        test: /\.css$/,
        use: ['raw-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '/images/[name]_[hash:5].[ext]?[hash:5]',
            },
          },
        ],
      },
    ],
  },
  plugins: IS_DEV ? devPlugins : prodPlugins,
};
