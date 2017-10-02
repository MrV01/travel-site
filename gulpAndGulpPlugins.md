
[Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Gulp installation.
  Assumption. NodeJS & npm have been installed.
  On WIN7 , please use nvm  ( Node Virtual Manager ) to keep Node&NPM up top date.

    1.  Install gulp-cli Globally (npm install "gulp" command  to special place on the workstation, which is availiable from all folders)
    Install:
    npm install gulp-cli --global    #  OR  -g

    Test:  
    λ gulp -v
    [22:29:28] CLI version 3.9.1

    1.  Add gulp to specific project folder. And make it available for development step only. The gulp package will not be distributed with the project packages.

      npm install gulp --save-dev    

2.  GULP plug-in(s) used in gulpfile.js and       ./gulp/tasks/scripts.js, styles.js, watch.js .

  1.  gulp-watch   - Watch specific files on the computer.
      npm i gulp-watch --save-dev

  2. POSTCSS  and all  gulp POSTCSS plugins.
        See gulpfile.js and  ./gulp/tasks/styles.js

  gulp-postcss    -   PostCSS plug-in
  autoprefixer    -  Autoprefixer ( propritery attrs) plugin to PostCSS
  postcss-simple-vars  - Variables in .css files
  postcss-nested     -  Nested CSS rules plug-in for PostCSS
  postcss-import    - "@import"  in  .scss  files.
  postcss-mixins     -   postcss-mixins module.
  postcss-hexrgba   -   postcss converter hex to rgba()

  npm install   gulp-postcss  autoprefixer  postcss-simple-vars  postcss-nested  postcss-import  postcss-mixins postcss-hexrgba  --save-dev

 3. Browser-sync  
     npm install browser-sync gulp-watch --save-dev

4.   gulp-inject:  Inject files (.css, .js etc) to index.html
   [gulp-inject](https://www.npmjs.com/package/gulp-inject)
    Sample index.html file, as a src for inject plugin. 
```html
<!DOCTYPE html>
<html>
<head>
<title>My index</title>
<!-- inject:css -->
<!-- endinject -->
</head>
<body>

<!-- inject:js -->
<!-- endinject -->
</body>
</html>
```


==================================================
Appendix:  Basic gulpfile.js file  
( Individual tasks are going to in sepa)
```javascript

var gulp = require('gulp'),
  watch = require('gulp-watch')
;

gulp.task('default', function() {
    console.log('Default task to run by gulp command');  
  });

  gulp.task('html', function() {
     console.log('Do something, when HTML file(s) changed');
  });

  gulp.task('css', function() {
     console.log('Do something like run SCSS/SASS preprocessor, when CSS file(s) changed');
  });

gulp.task('watch', function() {
    // Watch for index.html
   watch('./app/index.html', function() {
      // Start some task(s) , like following:
        gulp.start('html');  //  run  HTML processing gulptask
     });
     //  Watch for .css files in .../styles/<subfolders>/  directory tree.   
   watch('./app/assets/styles/**/*.css', function() {
       gulp.start('css')
   });


});
```
