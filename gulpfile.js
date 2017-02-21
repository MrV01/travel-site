var gulp = require('gulp'),
    watch = require('gulp-watch'),     // watch  plug-in
    postcss = require('gulp-postcss'),   //  PostCSS plug-in
    autoprefixer = require('autoprefixer'),        // Autoprefixer plugin to PostCSS
    cssvars = require('postcss-simple-vars'),   // Variables in .css files
    nested = require('postcss-nested'),   // Nested CSS rules plug-in for PostCSS
// Lession 10 has been ended at "postcss-nested" plugin point
    cssImport = require('postcss-import');

gulp.task('default',function() {
  console.log("You have created GULP task: default !");
});

gulp.task('html', function() {
  console.log("HTML files task!");
});

gulp.task('styles', function() {
 console.log("POSTCSS to CSS file's!");
  // PostCSS attached to GULP work flow
  // pipes in gulp:  gulp.src(./main.css) -->  gulp.dest(./temp/main.css)
  // By the way, gulp.src() is asyncronus function
  return gulp.src('./app/assets/styles/styles.css') // source files
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))  // filter hook for POSTCSS to include
                                          // postcss-simple-vars postcss-nested autoprefixer
    .pipe(gulp.dest('./app/temp/styles')); // destination directory
});


// "gulp watch"  command to watch for HTML,CSS files modifications
gulp.task('watch', function() {
  // trigger task "html"  when ./app/index.html changed
    watch('./app/index.html', function(){
      gulp.start('html');
    });
    // trigger task "styles"  when a /styles/**/*.css file(s)  changed
    watch('./app/assets/styles/**/*.css', function(){
       gulp.start('styles');
    });
});
