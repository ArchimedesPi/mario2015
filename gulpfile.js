var gulp = require('gulp');
//var coffee = require('gulp-coffee');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var browserSync = require('browser-sync');


gulp.task('sass', function() {
	return gulp.src('styles/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('build/css'));
});

gulp.task('browserify', function () {
  var browserified = transform(function(filename) {
    var b = browserify(filename);
    return b.bundle();
  });
  
  return gulp.src(['./scripts/*.js'])
    .pipe(browserified)
    .pipe(gulp.dest('build/js'));
});

gulp.task('jade', function () {
  return gulp.src('markup/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('build'))
});

// Static server
gulp.task('browser-sync', ['sass', 'browserify', 'jade'], function() {
    browserSync({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('watch', function () {
  gulp.watch('styles/**/*.scss', ['sass']);
  gulp.watch('markup/**/*.jade', ['jade']);
  gulp.watch('scripts/**/*.js', ['browserify']);
});

gulp.task('default', ['sass', 'browserify', 'jade'], function() {
});