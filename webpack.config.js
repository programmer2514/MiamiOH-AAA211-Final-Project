const path = require('path');
const HWP = require('html-webpack-plugin'); module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    filename: 'build.js',
    path: path.join(__dirname, '/public')},
    module:{
        rules:[{
            test: /\.[m]?js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }]
    },
    plugins:[
        new HWP({template: path.join(__dirname,'/src/index.html')})
    ]
}