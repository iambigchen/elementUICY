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
    src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
  })
}
function copyfont() {
  return watch('./**/*.scss', function() {
    src('./src/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/fonts'));
  })
}
exports.build = series(compile);