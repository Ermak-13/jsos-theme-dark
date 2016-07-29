var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename');

gulp.task('default', ['dev']);
gulp.task('dev', ['watch', 'sass']);

gulp.task('server', ['webserver']);
gulp.task('webserver', function () {
  gulp.src('./')
    .pipe(webserver({
      host: 'localhost',

      port: 8009,
      fallback: 'index.html'
    }));
});

gulp.task('sass', function () {
  gulp.src('./stylesheets/index.scss')
    .pipe(rename('jsos.scss'))
    .pipe(
      sass().on('error', sass.logError)
    )
    .pipe(rename('theme.css'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function () {
  gulp.watch('./stylesheets/**/*.scss', ['sass']);
});
