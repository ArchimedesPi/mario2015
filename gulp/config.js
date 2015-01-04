module.exports = {
    browserify: {
    // Enable source maps
    debug: true,
    // Additional file extentions to make optional
    //extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries: './scripts/app.js',
      dest: './build/js',
      outputName: 'app.js'
    }]
  }
};