
var path = require('path');  // standard module to get Absolute path, etc.

// The webpack.config.js module returns
// Object which tells to Webpack what to do and where to output the result.
// Here we just resolve and compose npm modules in a bundle with App.js
//
module.exports = {
  entry: "./app/assets/scripts/App.js",  /// Source file(s)
  output: { // Where the bundle fiiles should be created
       // Webpack wants Absolute path here for "path:"  attribute
      path: path.resolve(__dirname, "./app/temp/scripts") ,
      filename: "App.js", // Or any other nanme like AP-bundled.js, etc
  },  // Webpack  Modules Loaders section:
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
            presets: ['es2015']
        },
        test: /\.js$/,   // regular expression: Convert .js files
        exclude: /node_modules/      // RegExp  , except node_modules
      }
    ]
  }
}
