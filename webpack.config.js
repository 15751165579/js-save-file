const path = require('path')
module.exports = {
  entry: {
    main: path.join(__dirname, './src/js-save-file.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'js-save-file.js',
    libraryTarget: 'window'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        include: path.join(__dirname, 'src'),
        exclude: '/node_modules/'
      }
    ]
  }
}