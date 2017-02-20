var gulp = require('gulp'),
    watch = require('gulp-watch'),     // watch  plug-in
    postcss = require('gulp-postcss'),   //  PostCSS plug-in
    autoprefixer = require('autoprefixer'),        // Autoprefixer plugin to PostCSS
    cssvars = require('postcss-simple-vars'),   // Variables in .css files
    nested = require('postcss-nested');  // Nested CSS rules plug-in for PostCSS

gulp.task('default',function() {
  console.log("You have created GULP task: default !");
});

gulp.task('html', function() {
  console.log("Imagine something useful to be done to your HTML file here!");
});

gulp.task('styles', function() {
 console.log("Imagine SASS or POSTCSS done to your CSS file's here!");
  // PostCSS attached to GULP work flow
  // pipes in gulp:  gulp.src(./main.css) -->  gulp.dest(./temp/main.css)
  // By the way, gulp.src() is asyncronus function
  return gulp.src('./app/assets/styles/styles.css') // source files
    .pipe(postcss([cssvars, nested, autoprefixer]))  // filter hook for POSTCSS to include
                                          // postcss-simple-vars postcss-nested autoprefixer
    .pipe(gulp.dest('./app/temp/styles')); // destination directory
});


// "gulp watch"  command to watch for HTML,CSS files modifications
gulp.task('watch', function() {
  // trigger task "html"  when ./app/index.html changed
    watch('./app/index.html', function(){
      gulp.start('html');
    });
    // trigger task "styles"  when ./app/index.html changed
    watch('./app/assets/styles/**/*.css', function(){
       gulp.start('styles');
    });
});
