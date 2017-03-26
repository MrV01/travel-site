// Build task to create minimized set of files  ready
//  for go alive in dist folder

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    usemin = require('gulp-usemin');

gulp.task('deleteDistFolder', function(){
  return del('./dist');
});

gulp.task('optimizeImages',['deleteDistFolder'], function() {
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons',
                    '!./app/assets/images/icons/**/*']) //  (icons/**/* means folders, subfolders and all files )
          .pipe(imagemin({
            progressive: true, // .jpeg opimize
            interlaced: true,  // .gif optimize
            multipass: true  // .svg optimize
          })) //  npm install gulp-imagemin --save-dev
          .pipe(gulp.dest("./dist/assets/images"));
});

// gulp-usemin npm package is looking for special comments
// in index.html file :-)

gulp.task('usemin',['deleteDistFolder'], function(){
  return gulp.src("./app/index.html")
      .pipe(usemin())
      .pipe(gulp.dest("./dist"));
});

gulp.task('build',['deleteDistFolder', 'optimizeImages', 'usemin']);  // gulp build run many tasks
