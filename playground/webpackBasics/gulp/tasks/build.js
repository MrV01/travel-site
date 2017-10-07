//
//  Attention!!! TODO:
// Search the coursee materials regarding tasks.
//   sprites.js and icons.js
//
//GULP  build task.  require('./gulp/tasks/build');
//
// Build task to create minimized set of files  ready
//  for go alive in dist folder
//  "gulp" tasks 'styles','scripts',
//  are defined in the corresponding files of folder ./gulp/tasks
//

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    del = require('del'),
    // Uglification of the production HTML, CSS, JS files
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),   // revision
    cssnano = require('gulp-cssnano'),  // CSS
    uglify = require('gulp-uglify'),  // JS
    // solely for preview task 'previewDist' of ./docs folder
    browserSync = require('browser-sync').create(); // Only create() method from the package.

// browser preview task of the ./docs folder
// ( borrowed from "watch.js" task )
gulp.task('previewDocs', function() {
  // browserSync spins up a little server baseDir = docs
  browserSync.init({
    notify: false,
    server: {
      baseDir: "docs"
    }
  });  // browserSync

}); // previewDist

// Miscellenius functions - tasks

gulp.task('deleteDistFolder',function(){
  return del('./docs');
});

// copy Other files,  Beside index.html, images, styles, and scripts.
gulp.task('copyGeneralFiles',['deleteDistFolder'], function() {
  var pathToCopy = [
    './app/**/*',
    '!./app/index.html',
    '!./app/assets/images/**',
    '!./app/assets/styles/**',
    '!./app/assets/scripts/**',
    '!./app/temp',
    '!./app/temp/**'
  ]

  return gulp.src( pathToCopy )
    .pipe(gulp.dest("./docs"));
});

gulp.task('optimizeImages',['copyGeneralFiles'], function() {
    return gulp.src(['./app/assets/images/**/*','!./app/assets/images/icons',
                    '!./app/assets/images/icons/**/*']) //  (icons/**/* means folders, subfolders and all files )
          .pipe(imagemin({
            progressive: true, // .jpeg opimize
            interlaced: true,  // .gif optimize
            multipass: true  // .svg optimize
          })) //  npm install gulp-imagemin --save-dev
          .pipe(gulp.dest("./docs/assets/images"));
});

//
// New task 'useminTrigger' to sync the build process with
//

gulp.task('useminTrigger', ['optimizeImages'], function() {
    gulp.start('usemin');
});

// gulp-usemin npm package is looking for special comments
// in index.html file.
// Also runs styles.js and scripts.js  from file  gulpfile.js
//
gulp.task('usemin',['styles','scripts'], function() {
  return gulp.src("./app/index.html")
      .pipe(usemin( { // tells usemin to revision and compress files
          css: [function() {return rev()}, function() {return cssnano()}],  // invoke tools to do something with CSS.
          js: [function() {return rev()}, function() {return uglify()}]  // invoke tools to do something with  JS files
        // Install npm for the files revision, CSS compress, JS compress
        //  npm install gulp-rev gulp-cssnano gulp-uglify --save-dev
      }))
      .pipe(gulp.dest("./docs"));
});

// gulp build run many tasks
// gulp tasks to be dependent: like second (2) from first(1), must
//  1. First task returns <stream>
//  2. Second task (2)  has first task (1) name in the dependency list  ['first'].
//
gulp.task('build',['deleteDistFolder','copyGeneralFiles',  'optimizeImages', 'useminTrigger']);
