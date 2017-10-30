var path = require('path');

var SRC_PATH = path.resolve(__dirname, 'src');
var DST_PATH = path.resolve(__dirname, 'dst');

var config = {
  entry: SRC_PATH + '/app/index.js',
  output: {
    path: DST_PATH + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_PATH,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'stage-2']
        }
      }
    ]
  }
};

module.exports = config;
