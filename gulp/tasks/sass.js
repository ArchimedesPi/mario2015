var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sass         = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        settings: {
            sourceComments: 'map'
        }
    }))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({stream:true}));
});