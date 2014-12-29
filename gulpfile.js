var gulp = require('gulp');
var to5 = require('gulp-6to5');
var serve = require('gulp-serve');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');

var path = {
	js: 'src/**/*.js',
	html: 'src/**/*.html',
	output: 'dist/'
};

gulp.task('build-js', function(){
	return gulp.src(path.js)
			.pipe(plumber())
			.pipe(to5({errLogToConsole: true}))			
			.pipe(gulp.dest(path.output))
			.pipe(browserSync.reload({ stream: true }));
});

gulp.task('build-html', function(){
	return gulp.src(path.html)
			.pipe(changed(path.output, {extension: '.html'}))					
			.pipe(gulp.dest(path.output))
			.pipe(browserSync.reload({ stream: true }));
});

gulp.task('serve', ['build-js', 'build-html'], function(done) {
  browserSync({
    open: false,
    port: 8000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});

gulp.task('watch', ['serve'], function(){
    gulp.watch([path.js, path.html], ['build-js', 'build-html']); 
});

gulp.task('default', ['serve']);