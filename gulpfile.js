var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('scripts', function () {
    gulp.src('js/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function () {
  return sass('_sass/**/*.scss')
      .pipe(autoprefixer())
      .pipe(minifyCss())
      .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['scripts', 'sass'], function () {
    gulp.watch('js/**/*.js', ['scripts']);
    gulp.watch('_sass/**/*.{sass,scss}', ['sass']);
});
