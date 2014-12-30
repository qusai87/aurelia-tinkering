module.exports = function(config){
	config.set({
		basePath: '',
		frameworks: ['jspm', 'jasmine'],

		jspm: {
			loadFiles: ['src/**/*.js', 'test/**/*.js']
		},

		files: [],
		exclude: [],

		preprocessors: {
			'test/**/*.js': ['6to5'],
			'src/**/*.js': ['6to5']
		},

		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_INFO,
		autoWatch: true,
		browsers: ['Chrome'],
		singleRun: false
	});
};