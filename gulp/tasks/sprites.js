// Generate "sprites" -  single file which contains
// many icons inside, Goal - reduce images download
// time for client's browsers
// Steps:
// 1. Take all individual  files
// 2. Run gulp-svg-sprite plugin to pack them into
//   one SVG XML file.

var gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite');

// Configuration object for the plugin
// Generates CSS file with positions and offsets
// for every icon.
//
var config = {
  mode: {
    css: {
      render: {
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});
