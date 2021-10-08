const path = require('path');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';

function setupDevtool() {
  switch (true) {
    case IS_DEV:
      return 'eval';
    default:
      return false;
  }
}

module.exports = {
  mode: NODE_ENV || 'development',
  entry: path.resolve(__dirname, '../src/client/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: 'client.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['ts-loader']
      }
    ]
  },
  devtool: setupDevtool()
};