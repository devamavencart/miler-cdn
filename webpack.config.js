// webpack.config.js
const path = require('path');

module.exports = {
  entry: './index.js', // Replace with the path to your main JavaScript file
  output: {
    filename: 'bundle.js', // The name of the output bundle file
    path: path.resolve(__dirname, 'dist') // The output directory for the build file
  },
};