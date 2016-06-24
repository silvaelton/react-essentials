var gulp        = require('gulp')
var browserify  = require('browserify')
var babelify    = require('babelify')
var source      = require('vinyl-source-stream')
var reactify    = require('reactify');

gulp.task('default', function() {
  return browserify({
            entries : ['./source/app.js'],
            transform : [reactify],
          })
         .transform(babelify)
         .bundle()
         .pipe(source('snapterest.js'))
         .pipe(gulp.dest('./build/'))
});