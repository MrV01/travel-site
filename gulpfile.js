require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
// Integrate webpack into gulp automation
// We prefer not to use webpack features in this
// particular case, because heavily invested in gulp auto.
require('./gulp/tasks/scripts');
// Babel is not here, because it is invoked as loader in webpack.config.js 
