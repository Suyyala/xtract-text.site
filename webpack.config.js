const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    background: './src/background.js',
    content: './src/content.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json' },
        { from: './src/popup.html' },
      ]
    })
  ]
};
