'use strict';

let gulp = require('gulp');
// let lint = require('gulp-eslint');
// let mocha = require('gulp-mocha');
let webpack = require('gulp-webpack');
let del = require('del');

// let paths = ['*.js', 'models/*.js', 'routes/*.js', 'test/*.js', 'public/js/*.js'];

// const sources = {
//   html: '/public/index.html',
//   js: '/public/js/index.js',
//   test: '/test/karma-testing.js'
// };


//
// gulp.task('test', () => {
//   gulp.src(__dirname + '/test/*.js')
//   .pipe(mocha({reporter: 'nyan'}));
// });

gulp.task('del-build', () => {
  return del([
    __dirname + '/build/**', __dirname + '!/build'
  ])
  .then(paths => console.log('Deleted files and folders:\n', paths.join('\n')));
});

gulp.task('copy-html', () => {
  gulp.src(__dirname + '/index.html')
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('copy-css', () => {
  gulp.src(__dirname + '/assets/css/*.css')
  .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('webpack', () => {
  return gulp.src(__dirname + '/app/entry.js')
  .pipe(webpack({
    watch: true,
    module: {
      loaders: [
        { test: /\.css$/, loader: 'style!css'}
      ]
    },
    output: {
      filename: 'bundle.js'
    }
  }))
  .pipe(gulp.dest(__dirname + '/build'));
});

// gulp.task('watch', () =>{
//   gulp.watch(paths);
// });

gulp.task('bundle:test', () => {
  return gulp.src('./tests/karma-testing.js')
  .pipe(webpack({output: {filename: 'tests_bundle.js'},
  watch: true
}))
  .pipe(gulp.dest('./tests'));
});


gulp.task('default', ['del-build', 'copy-html', 'copy-css', 'webpack'])
// gulp.task('default', ['eslint', 'del-build', 'webpack', 'bundle:test', 'copy-html', 'copy-css']);
