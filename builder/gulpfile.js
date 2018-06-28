/**
 * Dependencies
 */
let gulp         = require( 'gulp' ),
    browserify   = require( 'browserify' ),
    babelify     = require( 'babelify' ),
    source       = require( 'vinyl-source-stream' ),
    buffer       = require( 'vinyl-buffer' ),
    gulp_clean   = require( 'gulp-clean' ),
    gulp_stylus  = require( 'gulp-stylus' ),
    gulp_sass    = require( 'gulp-sass' ),
    gulp_cssnano = require( 'gulp-cssnano' ),
    gulp_uglify  = require( 'gulp-uglify' ),
    gulp_notify  = require( 'gulp-notify' ),
    sourcemaps   = require( 'gulp-sourcemaps' ),
    watchify     = require( 'watchify' ),
    browserSync  = require( 'browser-sync' ).create()

    const image = require('gulp-image');

/**
 * Params
 */

/**
 * Scripts bundle
 */
let bundler = null

const bundle = function()
{
    bundler.bundle()
        .on( 'error', gulp_notify.onError( { title: 'Gulp: scripts' } ) )
        .pipe( source( 'bundle.js' ) )
        .pipe( buffer() )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( '../dist/assets/javascript' ) )
        .pipe( browserSync.stream() )
        .pipe( gulp_notify( { title: 'Gulp: scripts', message: 'success' } ) )
}

const bundleSufficient = function()
{
    bundler.bundle()
        .on( 'error', gulp_notify.onError( { title: 'Gulp: scripts' } ) )
        .pipe( source( 'bundle-sufficient.js') )
        .pipe( buffer() )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( '../dist/assets/javascript' ) )
        .pipe( browserSync.stream() )
        .pipe( gulp_notify( { title: 'Gulp: scripts', message: 'success lotr bundle' } ) )
}

const bundleCollaborative = function()
{
    bundler.bundle()
        .on( 'error', gulp_notify.onError( { title: 'Gulp: scripts' } ) )
        .pipe( source( 'bundle-collaborative.js') )
        .pipe( buffer() )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( '../dist/assets/javascript' ) )
        .pipe( browserSync.stream() )
        .pipe( gulp_notify( { title: 'Gulp: scripts', message: 'success lotr bundle' } ) )
}

gulp.task( 'scripts-collaborative', function()
{
    // Create bundler
    bundler = browserify( {
            cache       : {},
            packageCache: {},
            entries     : '../sources/javascript/collaborative.js',
            debug       : true,
            paths       : [ './node_modules', '../sources/javascript/collaborative.js','../sources/javascript/components']
        } )
        .transform( 'babelify', { presets: [ 'babel-preset-es2015' ].map( require.resolve ) } )

    // Watch
    bundler.plugin( watchify )

    // Listen to bundler update
    bundler.on( 'update', bundleCollaborative )  

    // Bundle
    bundleCollaborative()
})

gulp.task( 'scripts-sufficient', function()
{
    // Create bundler
    bundler = browserify( {
            cache       : {},
            packageCache: {},
            entries     : '../sources/javascript/sufficient.js',
            debug       : true,
            paths       : [ './node_modules', '../sources/javascript/sufficient.js','../sources/javascript/components']
        } )
        .transform( 'babelify', { presets: [ 'babel-preset-es2015' ].map( require.resolve ) } )

    // Watch
    bundler.plugin( watchify )

    // Listen to bundler update
    bundler.on( 'update', bundleSufficient )  

    // Bundle
    bundleSufficient()
})
/**
 * Scripts
 */
gulp.task( 'scripts', function()
{
    // Create bundler
    bundler = browserify( {
            cache       : {},
            packageCache: {},
            entries     : '../sources/javascript/index.js',
            debug       : true,
            paths       : [ './node_modules', '../sources/javascript' ]
        } )
        .transform( 'babelify', { presets: [ 'babel-preset-es2015' ].map( require.resolve ) } )

    // Watch
    bundler.plugin( watchify )

    // Listen to bundler update
    bundler.on( 'update', bundle )  

    // Bundle
    bundle()
})

/**
 * Styles
 */
gulp.task( 'styles', function()
{
    return gulp.src( '../sources/scss/main.scss' )
        .pipe( gulp_sass( {
            compress: false
        } ) )
        .on( 'error', gulp_notify.onError( { title: 'Gulp: styles' } ) )
        .pipe( sourcemaps.init( { loadMaps: true } ) )
        .pipe( sourcemaps.write( './' ) )
        .pipe( gulp.dest( '../dist/assets/stylesheet' ) )
        .pipe( browserSync.stream( { match: '**/*.css' } ) )
        .pipe( gulp_notify( { title: 'Gulp: styles', message: 'success' } ) )
} )

/**
 * Serve
 */
gulp.task( 'serve', function()
{
    // Browsersync
    browserSync.init( {
        // proxy: 'http://domain.dev'
        server:
        {
            baseDir  : '../dist'
        }
    } )
} )

/**
 * Build
 */
gulp.task('build-pages', function ()
{
    return gulp.src('./../sources/pages/*.html')
        .pipe(gulp.dest('./../dist/pages/'))
})

gulp.task('build-index', function ()
{
    return gulp.src('./../sources/index.html')
        .pipe(gulp.dest('./../dist/'))
        .pipe( gulp_notify( {
            title  : 'Gulp: build-index',
            message: 'success'
        } ) )
})
gulp.task( 'build-scripts', function()
{
    return gulp.src( '../dist/assets/javascript/bundle.js' )
        .pipe( gulp_uglify() )
        .pipe( gulp.dest( '../dist/assets/javascript' ) )
} )

gulp.task( 'build-styles', function()
{
    return gulp.src( '../dist/assets/stylesheet/main.css' )
        .pipe( gulp_cssnano() )
        .pipe( gulp.dest( '../dist/assets/stylesheet' ) )
} )
gulp.task('build-images', function ()
{
    return gulp.src(['./../sources/assets/images/*.png','./../sources/assets/images/*.jpg'])
        .pipe(image())
        .pipe(gulp.dest('./../dist/assets/images'))
})
gulp.task('build-fonts', function ()
{
    return gulp.src(['./../sources/assets/fonts/*.ttf','./../sources/assets/fonts/*.ttc'])
        .pipe(gulp.dest('./../dist/assets/fonts'))
})
gulp.task( 'remove-maps', function()
{
    return gulp.src( [ '../dist/assets/javascript/bundle.js.map', '../dist/assets/stylesheet/main.css.map' ] )
        .pipe( gulp_clean( { force: true, read: false } ) )
} )

gulp.task( 'build', [ 'build-index', 'build-pages', 'build-scripts', 'build-styles', 'remove-maps', 'build-images','build-fonts'], function()
{
    return gulp.src( './' )
        .pipe( gulp_notify( {
            title  : 'Gulp: build',
            message: 'success'
        } ) )
} )

/**
 * Default
 */
gulp.task( 'default', function()
{
    // Scripts
    gulp.start( 'scripts' )
    gulp.start( 'scripts-sufficient' )
    gulp.start( 'scripts-collaborative' )
    
    // Styles
    gulp.start( 'styles' )
    gulp.watch( '../sources/scss/**', [ 'styles' ] )
    gulp.watch( './../sources/*.html', ['build-index'])
    gulp.watch( './../sources/pages/*.html', ['build-pages'])
    gulp.start( 'build' )
    // Serve
    gulp.start( 'serve' )
} )

gulp.task('watch', function()
{
    

})
