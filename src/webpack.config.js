const path = require('path')

module.exports = {
  entry: {
    'main.js': [
      path.resolve(__dirname, 'index.js'),
      path.resolve(__dirname, 'game.js')
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),  // Ensure output goes to ./public
    filename: 'main.js'  // The output file should be main.js
  },
  mode: 'development',  // Or 'production' depending on your setup
};
