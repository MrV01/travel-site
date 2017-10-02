
 Webpack emulates NodeJS module functionality in a Browser environment. I.E.
var Person = require('./modules/Person[.js]')
Webpack assembles modules into JS file, suitable for Browsers to handle.

When using Webpack, File scripts/ modules / App.js contains
require('./pass/filename') as NodeJS does.

1. Installation of webpack ( Globally)
    npm install webpack -g

2. Create config file webpack.config.js  in the root of the project, next to package.js file.

```javascript
var path = require('path');  // standard module to get Absolute path, etc.

module.exports = {
  entry: "./app/assets/scripts/App.js",  /// Source file(s)
  output: { // Where the bundle fiiles should be created
      path: path.resolve(__dirname, "./app/temp/scripts") , // Webpack wants Absolute path here.
      filename: "App.js", // Or any other nanme like AP-bundled.js, etc
  }  

}

```

3. Automation , embedded into Webpack is not used in favor of Gulp   automation of the project, based on Gulp - Browsersync workflow.  By means of custom Gulp adapter-module-task  "scripts" task ( process JS App and vendors files) which calls webpack programmaticaly/internally.  

 ```javascript
 // Gulp - Webpack custom adapter.
 //  Important!   To be called from Gulp ,
 // webpack must be installed locally in the project folder.
 // npm install webpack --save-dev
 //  In case install webpack fails,  install uglify-js first:
 //     npm install uglify-js --save-dev
 //     npm install uglifyjs-webpack-plugin --save-dev
 //     npm install webpack --save-dev

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

 ```
4.  BABEL - solution of the problem: Happy users with obsolete browsers OR  Successful developer carrier.

      1. Installation of  Babel loader for Webpack .
          npm install babel-core babel-loader  babel-preset-es2015 --save-dev

          Important Note: As  of  2017,  babel-preset-env is recommended to use instead of 20XX nodules.
          [babel-preset-env](https://github.com/babel/babel-preset-env)

          npm install babel-preset-env --save-dev
Without any configuration options, babel-preset-env behaves exactly the same as babel-preset-latest (or babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 together).

```javascript
// No configuration options
{
"presets": ["env"]
}
//This example only includes the polyfills and code transforms needed for the last two versions of each browser, and versions of Safari greater than or equal to 7.
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}

```

Webpack config  (webpack.config.js ) for our case would be.

```javascript
var path = require('path');  

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

```


5. Practicing the  ES6




6. How to use JavaScript in the web site, OR  how to avoid "jQuery spagetti code". Lecture 42.  


XX.  "Set of tools to use depends of the problem to solve."
         gulp + plugins automation is popular in relatively simple projects.  Webpack is quite popular in React/Redux ( perhaps Angular as well )  world(s), and medim to big team's sizes ( substantial amount of Webpack configuration efforts required).
         Discussion [webpack browserfy-gulp which is better](https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better)
