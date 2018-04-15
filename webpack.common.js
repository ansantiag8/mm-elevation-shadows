const path = require('path');

module.exports = {
  entry: {
    app: './src/mm-elevation-shadows.js',
  },
  output: {
    filename: 'mm-elevation-shadows.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};
