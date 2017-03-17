// Webback automation file
// npm install webpack --save-dev
//
var gulp = require('gulp'),
  webpack = require('webpack');
//
gulp.task('scripts', function(callback) { // run webpack module on the .config.js
  webpack(require('../../webpack.config.js'), function(err, stats) {
    if( err ) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
