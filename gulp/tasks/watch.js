var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
  gulp.watch('styles/**/*.scss', ['sass']);
  gulp.watch('markup/*.jade', ['markup']);
  gulp.watch('scripts/*.js', ['browserify']);
  gulp.watch('images/*', ['images']);
});