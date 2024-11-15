const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/public'),
  },
  module: {
    rules: [
      {
        test: /\.[m]?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      }
    ]
  },
  plugins: [
    new HTMLPlugin({
        template: path.join(__dirname, '/src/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        { from: path.join(__dirname, '/src/images/favicon/favicon.ico') },
        { from: path.join(__dirname, '/src/images/favicon/favicon-16x16.png') },
        { from: path.join(__dirname, '/src/images/favicon/favicon-32x32.png') },
        { from: path.join(__dirname, '/src/images/SocialCard.png') },
      ],
    }),
  ]
}
