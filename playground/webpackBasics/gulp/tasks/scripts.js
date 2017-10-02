//
// Gulp - Webpack custom adapter - workaround.
//  Important!   To be called from Gulp ,
// webpack must be installed locally in the project folder.
// npm install webpack --save-dev
//

var gulp = require('gulp') ,
      webpack = require('webpack')
;
gulp.task('scripts', function(callback) {
  // Webpack has been called programmatically from Gulp task function
  // Therefore configurations are set, using Object with content of webpack.config.js
   webpack(require('../../webpack.config.js'), function(err, status) {
     if(err) {
       console.log(err.toString());
    }
     console.log(status.toString());
     callback() ;  // Let know to Gulp that Webpack completed
   });
});
