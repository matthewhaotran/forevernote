//Require
const gulp = require('gulp');
const uglifyJS = require('gulp-uglify');
const uglifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const nodemon = require('gulp-nodemon');

//Tasks
gulp.task('copy:html', function() {
  return gulp.src('./client/*.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build:js', function() {
  return gulp.src([
    './node_modules/jquery/dist/jquery.js',
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

gulp.task('serve', function() {
  return nodemon({
    script: 'index.js',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

//Watch
gulp.task('watch', function() {
  gulp.watch('./client/**/*.css', ['build:css']);
  gulp.watch('./client/**/*.js', ['build:js']);
  gulp.watch('./client/**/*.html', ['copy:html']);
});


//Default Task
gulp.task('default', ['copy:html', 'build:js', 'build:css', 'watch', 'serve']);
