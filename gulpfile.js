//Require
const gulp = require('gulp');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

//Tasks
gulp.task('copy:html', function() {
  return gulp.src('./client/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:js', function() {
  return gulp.src([
    './node_modules/angular/angular.js',
    './client/**/*.module.js',
    './client/**/*.js'
  ])
    .pipe(concat('bundle.js'))
    .pipe(uglifyJS())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:css', function() {
  return gulp.src([
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './client/**/*.css'
  ])
    .pipe(concat('bundle.css'))
    .pipe(uglifyCSS())
    .pipe(gulp.dest('./dist/'));
});

//Watch

//Default Task
