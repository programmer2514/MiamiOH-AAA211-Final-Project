import path from 'path';

import HTMLPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

export default {
  entry: {
    reactVendors: [
      'react',
      'react-dom',
      'react-helmet',
    ],
    markdownVendors: [
      'react-markdown',
      'rehype-raw',
      'reading-time/lib/reading-time',
    ],
    app: {
      import: [
        './src/index.mjs',
        './src/components/index.mjs',
        './src/pages/index.mjs',
        './src/images/index.mjs',
        './src/images/cards/index.mjs',
        './src/articles/index.mjs',
      ],
      dependOn: ['reactVendors', 'markdownVendors'],
    },
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(import.meta.dirname, '/public'),
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        resolve: {
          fullySpecified: false,
          extensions: ['.js', '.mjs'],
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.md$/i,
        loader: 'raw-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/images/favicon/favicon.ico' },
        { from: './src/images/favicon/favicon-16x16.png' },
        { from: './src/images/favicon/favicon-32x32.png' },
        { from: './src/images/favicon/SocialCard.jpg' },
        { from: './src/downloads/Handout.pdf' },
        { from: './src/downloads/Poster.pdf' },
        { from: './src/downloads/Pamphlet.pdf' },
        { from: './src/downloads/Instagram.png' },
        { from: './src/downloads/Snapchat.png' },
        { from: './src/downloads/Twitter-Facebook.png' },
      ],
    }),
  ],
};
