const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

// Compile SCSS to CSS
function styles() {
  return src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('build/css'));
}

// Concatenate and Minify JavaScript
function scripts() {
  return src('js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest('build/js'));
}

// Watch SCSS Files for Changes
function watchStyles() {
  return watch('scss/**/*.scss', styles);
}

// Watch JavaScript Files for Changes
function watchScripts() {
  return watch('js/**/*.js', scripts);
}

// Define build task
const build = parallel(styles, scripts);

// Define default task
exports.default = series(
  build,
  parallel(watchStyles, watchScripts)
);

// Export individual tasks for testing or other usage
exports.styles = styles;
exports.scripts = scripts;
