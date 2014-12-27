var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('markup', function() {
    return gulp.src('markup/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('build/'));
});