var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch('stylesheets/**/*.scss', ['sass']);
  gulp.watch('markup/*.jade', ['markup']);
});