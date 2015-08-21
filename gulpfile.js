var args = require('yargs').argv;
var config = require('./gulp.config')();
var del = require('del');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')({
    lazy: true
});

gulp.task('help', $.taskListing);

gulp.task('default', ['help']);

gulp.task('inject-js', injectJs);

//////////

function injectJs() {
    return gulp
        .src(config.index)
        .pipe($.inject(gulp.src(config.alljs)))
        .pipe(gulp.dest(config.root));
}
