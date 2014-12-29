var gulp = require('gulp');
var to5 = require('gulp-6to5');
var serve = require('gulp-serve');
var watch = require('gulp-watch');

var path = {
	js: 'src/**/*.js',
	html: 'src/**/*.html',
	output: 'dist/'
};

gulp.task('build-js', function(){
	return gulp.src(path.js)
			.pipe(to5())
			.pipe(gulp.dest(path.output));
});

gulp.task('build-html', function(){
	return gulp.src(path.html)			
			.pipe(gulp.dest(path.output));
});

gulp.task('serve', ['build-js', 'build-html'], serve({ 
	root: [__dirname],
	port: 8000
}));

gulp.task('watch', ['serve'], function(){
	gulp.watch([path.js, path.html], ['build-js', 'build-html']);
});

gulp.task('default', ['serve']);