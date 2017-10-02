// SCSS conversion
require('./gulp/tasks/styles');
// Browser Sync. Live preview of the site
require('./gulp/tasks/watch');
// SVG files conversion
// require('./gulp/tasks/sprites');

// Integrate webpack into gulp automation
// We prefer not to use webpack  automation features ( too much webpack configurations required  )
//   in this particular case. Have choosen  gulp - browsersync automation.
require('./gulp/tasks/scripts');
///// Note:  Babel is invoked as "loader" in webpack.config.js

// Moderizr for client browser features set testing.
// the modernizr.js adds class to <html> tag: <html class=" svg">
//  it means that client's browser supports SVG sprite,
// and no need to download and use .png file for icons.
// require('./gulp/tasks/modernizr');

// Build task for production
// require('./gulp/tasks/build');
