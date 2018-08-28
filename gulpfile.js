var gulp = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var sourcemaps = require( 'gulp-sourcemaps' );
var browserSync = require( 'browser-sync' ).create();
var reload = browserSync.reload;

var styleSRC = 'src/scss/style.scss';
var styleDIST = './dist/css/';
var styleWatch = 'src/scss/**/*';

var htmlWatch = '**/*.html';

gulp.task('style', function(){
	gulp.src ( styleSRC )
		.pipe( sourcemaps.init() )
		.pipe( sass({
			errorLogToConsole: true,
			outputStyle: 'compressed'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( autoprefixer({ 
			browsers: ['last 2 versions'],
			cascade: false
		}) )
		.pipe( rename( { suffix: '.min' } ))
		.pipe( sourcemaps.write( './') )
		.pipe( gulp.dest( styleDIST ) )
		.pipe( browserSync.stream() );
});

gulp.task('default', ['style']);

gulp.task('watch', ['default'], function(){
	browserSync.init({
        server: "./dist"  
    });
	gulp.watch( styleWatch, ['style', reload] );
	gulp.watch( htmlWatch, reload );
});