const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const watch = require('gulp-watch');

function compile() {
  return watch('./**/*.scss', function() {
    src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(cssmin())
    .pipe(dest('./lib'));
  })
}

exports.build = series(compile);