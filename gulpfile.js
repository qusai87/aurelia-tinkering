var gulp = require('gulp');
var to5 = require('gulp-6to5');
var serve = require('gulp-serve');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

var path = {
	js: 'src/**/*.js',
	html: 'src/**/*.html',
	output: 'dist/'
};

gulp.task('build-js', function(){
	return gulp.src(path.js)
			.pipe(plumber())
			.pipe(to5({errLogToConsole: true}))			
			.pipe(gulp.dest(path.output));
});

gulp.task('build-html', function(){
	return gulp.src(path.html)	
			.pipe(plumber())		
			.pipe(gulp.dest(path.output));
});

gulp.task('serve', ['build-js', 'build-html'], serve({ 
	root: [__dirname],
	port: 8000
}));

gulp.task('watch', ['serve'], function(){
    var watcher = gulp.watch([path.js, path.html], ['build-js', 'build-html']); 
});

gulp.task('default', ['serve']);