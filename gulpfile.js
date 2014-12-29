var gulp = require('gulp');
var to5 = require('gulp-6to5');
var serve = require('gulp-serve');

gulp.task('build-js', function(){
	return gulp.src('src/app.js')
			.pipe(to5())
			.pipe(gulp.dest('dist'));
});

gulp.task('build-html', function(){
	return gulp.src('src/app.html')			
			.pipe(gulp.dest('dist'));
});

gulp.task('serve', ['build-js', 'build-html'], serve({ 
	root: [__dirname],
	port: 8000
}));

gulp.task('default', ['serve']);